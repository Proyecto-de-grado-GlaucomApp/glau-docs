import { FormDataSignUp } from "@/user/entities";
import { ValidationResponse } from "@/user/response";
import { ValidationError } from "yup";
import { signUpService } from "../signUpService";
import { schemaSignUp } from "@/user/contracts";

// Mock fetch
global.fetch = jest.fn();

// Mock schemaSignUp.validate
jest.mock("@/user/contracts", () => ({
  schemaSignUp: {
    validate: jest.fn(),
  },
}));

describe("SIGN UP SERVICE", () => {

  afterEach(() => {
    jest.clearAllMocks();
  });

  describe("VALIDATION ERRORS", () => {
    it("When input is invalid, then it should return validation errors", async () => {
      const userData: FormDataSignUp = {
        email: "invalid-email",
        username: "us",
        password: "123",
        confirmPassword: "123",
        entity: "A",
      };

      const validationError = new ValidationError("Validation failed", [
        { message: "Invalid email address" },
        { message: "Username must be at least 3 characters long" },
        { message: "Password must be at least 8 characters long" },
        { message: "Password must contain at least one uppercase letter and one special character" },
        { message: "Entity must be at least 3 characters long" },
      ]);

      (schemaSignUp.validate as jest.Mock).mockRejectedValue(validationError);

      const response: ValidationResponse = await signUpService.signUp(userData);

      expect(response.success).toBe(false);
    });
  });

  describe("SERVER ERRORS", () => {
    it("When server returns 409 status, then it should return email already registered error", async () => {
      const userData: FormDataSignUp = {
        email: "already@registered.com",
        username: "validuser",
        password: "ValidPass123!",
        confirmPassword: "ValidPass123!",
        entity: "Hospital XYZ",
      };

      (schemaSignUp.validate as jest.Mock).mockResolvedValue(userData);
      (global.fetch as jest.Mock).mockResolvedValue({ status: 409 });

      const response: ValidationResponse = await signUpService.signUp(userData);

      expect(response.success).toBe(false);
      expect(response.message).toEqual(["Correo ya registrado"]);
    });

    it("When server fails with a network error, then it should handle the error", async () => {
      const userData: FormDataSignUp = {
        email: "networkerror@domain.com",
        username: "user123",
        password: "Password123!",
        confirmPassword: "Password123!",
        entity: "Medical Entity",
      };

      (schemaSignUp.validate as jest.Mock).mockResolvedValue(userData);
      (global.fetch as jest.Mock).mockRejectedValue(new Error("Network Error"));

      const response: ValidationResponse = await signUpService.signUp(userData);

      expect(response.success).toBe(false);
      expect(response.message).toContain("Ocurrió un error inesperado");
    });
  });

  describe("HAPPY PATH", () => {
    it("When input is valid and server responds successfully, then it should return success", async () => {
      const userData: FormDataSignUp = {
        email: "validuser@test.com",
        username: "validuser",
        password: "Password!123",
        confirmPassword: "Password!123",
        entity: "Hospital XYZ",
      };

      (schemaSignUp.validate as jest.Mock).mockResolvedValue(userData);
      (global.fetch as jest.Mock).mockResolvedValue({
        status: 200,
        json: async () => ({ message: "User registered successfully" }),
      });

      const response: ValidationResponse = await signUpService.signUp(userData);

      expect(response.success).toBe(true);
      expect(response.message).toBeUndefined();
    });
  });

  describe("EDGE CASES", () => {
    it("When email is not provided, then it should return an error", async () => {
      const userData: FormDataSignUp = {
        email: "",
        username: "validuser",
        password: "Password123!",
        confirmPassword: "Password123!",
        entity: "Hospital XYZ",
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

      (schemaSignUp.validate as jest.Mock).mockRejectedValue(validationError);

      const response: ValidationResponse = await signUpService.signUp(userData);

      expect(response.success).toBe(false);
      expect(response.message).toEqual(["Email is required"]);
    });

    it("When password doesn't match confirmPassword, then it should return an error", async () => {
      const userData: FormDataSignUp = {
        email: "validuser@test.com",
        username: "validuser",
        password: "Password123!",
        confirmPassword: "DifferentPassword123!",
        entity: "Hospital XYZ",
      };

      const validationError = new ValidationError("Validation failed", userData, "confirmPassword");
      validationError.inner = [
        {
          message: "Passwords must match",
          path: "confirmPassword",
          type: "notEqual",
          value: userData.confirmPassword,
          errors: [],
          inner: [],
          [Symbol.toStringTag]: "",
          name: ""
        },
      ];

      (schemaSignUp.validate as jest.Mock).mockRejectedValue(validationError);

      const response: ValidationResponse = await signUpService.signUp(userData);

      expect(response.success).toBe(false);
      expect(response.message).toEqual(["Passwords must match"]);
    });
  });

});
