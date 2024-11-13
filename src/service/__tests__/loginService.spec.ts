import { FormDataLogin } from "@/user/entities";
import { ValidationResponse } from "@/user/response";
import { ValidationError } from "yup";
import { loginService } from "../loginService";
import { schemaLogIn } from "@/user/contracts";

// Mock fetch
global.fetch = jest.fn();

// Mock schemaLogIn.validate
jest.mock("@/user/contracts", () => ({
  schemaLogIn: {
    validate: jest.fn(),
  },
}));

describe("LOGIN SERVICE", () => {

  afterEach(() => {
    jest.clearAllMocks();
  });

  describe("VALIDATION ERRORS", () => {
    it("When input is invalid, then it should return validation errors", async () => {
      const userData: FormDataLogin = {
        email: "invalid-email",
        password: "123",
      };

      const validationError = new ValidationError("Validation failed", [
        { message: "Invalid email address" },
        { message: "Password is required" },
      ]);

      (schemaLogIn.validate as jest.Mock).mockRejectedValue(validationError);

      const response: ValidationResponse = await loginService.login(userData);

      expect(response.success).toBe(false);
    });
  });

  describe("SERVER ERRORS", () => {
    it("When server returns 401 status, then it should return unauthorized error", async () => {
      const userData: FormDataLogin = {
        email: "wrong@credentials.com",
        password: "wrongPassword",
      };

      (schemaLogIn.validate as jest.Mock).mockResolvedValue(userData);
      (global.fetch as jest.Mock).mockResolvedValue({ status: 401 });

      const response: ValidationResponse = await loginService.login(userData);

      expect(response.success).toBe(false);
      expect(response.message).toEqual(["Credenciales incorrectas"]);
    });

    it("When server fails with a network error, then it should handle the error", async () => {
      const userData: FormDataLogin = {
        email: "networkerror@domain.com",
        password: "Password123!",
      };

      (schemaLogIn.validate as jest.Mock).mockResolvedValue(userData);
      (global.fetch as jest.Mock).mockRejectedValue(new Error("Network Error"));

      const response: ValidationResponse = await loginService.login(userData);

      expect(response.success).toBe(false);
    });
  });

  describe("HAPPY PATH", () => {
    it("When input is valid and server responds successfully, then it should return success", async () => {
      const userData: FormDataLogin = {
        email: "validuser@test.com",
        password: "Password!123",
      };

      (schemaLogIn.validate as jest.Mock).mockResolvedValue(userData);
      (global.fetch as jest.Mock).mockResolvedValue({
        status: 200,
        json: async () => ({ token: "valid-token" }),
      });

      const response: ValidationResponse = await loginService.login(userData);

      expect(response.success).toBe(true);
      expect(response.message).toBeUndefined();
    });
  });

  describe("EDGE CASES", () => {
    it("When email is not provided, then it should return an error", async () => {
      const userData: FormDataLogin = {
        email: "",
        password: "Password123!",
      };

      const validationError = new ValidationError("Validation failed", userData, "email");
      validationError.inner = [
        {
            message: "Email is required",
            path: "email",
            type: "required",
            value: userData.email,
            errors: [],
            inner: [],
            [Symbol.toStringTag]: "",
            name: ""
        },
      ];

      (schemaLogIn.validate as jest.Mock).mockRejectedValue(validationError);

      const response: ValidationResponse = await loginService.login(userData);

      expect(response.success).toBe(false);
      expect(response.message).toEqual(["Email is required"]);
    });

    it("When password is too short, then it should return an error", async () => {
      const userData: FormDataLogin = {
        email: "validuser@test.com",
        password: "123",
      };

      const validationError = new ValidationError("Validation failed", userData, "password");
      validationError.inner = [
        {
            message: "Password must be at least 6 characters long",
            path: "password",
            type: "min",
            value: userData.password,
            errors: [],
            inner: [],
            [Symbol.toStringTag]: "",
            name: ""
        },
      ];

      (schemaLogIn.validate as jest.Mock).mockRejectedValue(validationError);

      const response: ValidationResponse = await loginService.login(userData);

      expect(response.success).toBe(false);
      expect(response.message).toEqual(["Password must be at least 6 characters long"]);
    });
  });

});
