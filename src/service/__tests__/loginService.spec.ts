
import { FormDataLogin, User } from "@/user/entities";
import { ValidationResponse } from "@/user/response";
import { loginService } from "../loginService";
import { authService } from "../authService";

describe("LOGIN SERVICE", () => {
  
  // Test cuando los datos del formulario son válidos y la respuesta del servidor es exitosa
  it("When user login is successful, then it should store the user in localStorage", async () => {
    const userData: FormDataLogin = {
      email: "test@example.com",
      password: "validPassword123",
    };

    // Mock de la respuesta de fetch
    const mockJwt = "mockJwtToken";
    global.fetch = jest.fn().mockResolvedValue({
      status: 200,
      text: jest.fn().mockResolvedValue(mockJwt),
    });

    // Mock de jwtDecode
    jest.mock("jwt-decode", () => ({
      jwtDecode: jest.fn().mockReturnValue({
        email: "test@example.com",
        sub: "123",
        role: "user",
      }),
    }));

    const mockUser: User = {
      JWT: mockJwt,
      id: "123",
      email: "test@example.com",
      role: "user",
    };

    // Simulamos el login con el authService
    const loginSpy = jest.spyOn(authService, "login").mockImplementation(() => {});

    const result: ValidationResponse = await loginService.login(userData);

    expect(result.success).toBe(true);
    expect(result.message).toEqual([]);
    expect(loginSpy).toHaveBeenCalledWith(mockUser); // Aseguramos que el usuario fue almacenado en localStorage
  });

  // Test cuando hay un error de validación en el esquema de login
  it("When user login validation fails, then it should return validation error messages", async () => {
    const userData: FormDataLogin = {
      email: "invalidEmail",
      password: "", // Campo vacío para generar error de validación
    };

    // Simulamos un error de validación con yup
    const result: ValidationResponse = await loginService.login(userData);

    expect(result.success).toBe(false);
    expect(result.message).toContain("Email is not valid");
    expect(result.message).toContain("Password is required");
  });

  // Test cuando el servidor responde con un error (por ejemplo, correo ya registrado)
  it("When server responds with error, then it should return server error message", async () => {
    const userData: FormDataLogin = {
      email: "test@example.com",
      password: "validPassword123",
    };

    // Simulamos una respuesta con error 409 (correo ya registrado)
    global.fetch = jest.fn().mockResolvedValue({
      status: 409,
      text: jest.fn().mockResolvedValue(""),
    });

    const result: ValidationResponse = await loginService.login(userData);

    expect(result.success).toBe(false);
    expect(result.message).toContain("Correo ya registrado");
  });

  // Test cuando la petición al servidor falla (por ejemplo, error de red)
  it("When server request fails, then it should return network error message", async () => {
    const userData: FormDataLogin = {
      email: "test@example.com",
      password: "validPassword123",
    };

    // Simulamos un error de red en fetch
    global.fetch = jest.fn().mockRejectedValue(new Error("Network Error"));

    const result: ValidationResponse = await loginService.login(userData);

    expect(result.success).toBe(false);
    expect(result.message).toContain("Network Error");
  });

});
