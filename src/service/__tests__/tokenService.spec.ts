import { User } from "@/user/entities";
import { authService } from "../authService";
import { tokenService } from "../tokenService";

global.fetch = jest.fn();

describe("TOKEN SERVICE", () => {

  describe("GET TOKEN", () => {
    it("When user is authenticated, then it should return the token", async () => {
        const mockUser: User = {
            id: "123",
            JWT: "valid-token",
            email: "user@example.com",
            role: "admin",
        };

        jest.spyOn(authService, 'getUser').mockReturnValueOnce(mockUser as User);
    
        (fetch as jest.Mock).mockResolvedValue({
            status: 200,
            json: jest.fn().mockResolvedValue({ apiKey: "mockApiKey", status: "active" }),
        });
    
        const result = await tokenService.getToken();
        expect(result).toEqual({ apiKey: "mockApiKey", status: "active" });
    });

    it("When user is not authenticated, then it should throw an error", async () => {
      (authService.getUser as jest.Mock).mockResolvedValue(null);

      await expect(tokenService.getToken()).resolves.toBeNull();
    });

    it("When token endpoint returns 404, then it should return null", async () => {
      const mockUser = { id: "123", JWT: "valid-token" };
      (authService.getUser as jest.Mock).mockResolvedValue(mockUser);

      (fetch as jest.Mock).mockResolvedValue({ status: 404 });

      const result = await tokenService.getToken();
      expect(result).toBeNull();
    });

    it("When there is a network error, then it should return null", async () => {
      const mockUser = { id: "123", JWT: "valid-token" };
      (authService.getUser as jest.Mock).mockResolvedValue(mockUser);

      (fetch as jest.Mock).mockRejectedValue(new Error("Network Error"));

      const result = await tokenService.getToken();
      expect(result).toBeNull();
    });
  });

  describe("CREATE TOKEN", () => {
    it("When user is authenticated and endpoint returns success, then it should return true", async () => {
      const mockUser = { id: "123", JWT: "valid-token" };
      (authService.getUser as jest.Mock).mockResolvedValue(mockUser);

      (fetch as jest.Mock).mockResolvedValue({ ok: true });

      const result = await tokenService.createToken();
      expect(result).toBe(true);
    });

    it("When user is not authenticated, then it should throw an error", async () => {
      (authService.getUser as jest.Mock).mockResolvedValue(null);

      const result = await tokenService.createToken();
      expect(result).toBe(false);
    });

    it("When there is a network error, then it should return false", async () => {
      const mockUser = { id: "123", JWT: "valid-token" };
      (authService.getUser as jest.Mock).mockResolvedValue(mockUser);

      (fetch as jest.Mock).mockRejectedValue(new Error("Network Error"));

      const result = await tokenService.createToken();
      expect(result).toBe(false);
    });
  });

  describe("DELETE TOKEN", () => {
    it("When user is authenticated and endpoint returns success, then it should not throw an error", async () => {
      const mockUser = { id: "123", JWT: "valid-token" };
      (authService.getUser as jest.Mock).mockResolvedValue(mockUser);

      (fetch as jest.Mock).mockResolvedValue({ ok: true });

      await expect(tokenService.deleteToken()).resolves.toBeUndefined();
    });

    it("When user is not authenticated, then it should throw an error", async () => {
      (authService.getUser as jest.Mock).mockResolvedValue(null);

      await expect(tokenService.deleteToken()).rejects.toThrow("Usuario no autenticado o ID de usuario no disponible. Por favor, inicie sesión.");
    });

    it("When endpoint returns an error status, then it should throw an error", async () => {
      const mockUser = { id: "123", JWT: "valid-token" };
      (authService.getUser as jest.Mock).mockResolvedValue(mockUser);

      (fetch as jest.Mock).mockResolvedValue({ ok: false, status: 500 });

      await expect(tokenService.deleteToken()).rejects.toThrow("Error: 500");
    });

    it("When there is a network error, then it should throw an error", async () => {
      const mockUser = { id: "123", JWT: "valid-token" };
      (authService.getUser as jest.Mock).mockResolvedValue(mockUser);

      (fetch as jest.Mock).mockRejectedValue(new Error("Network Error"));

      await expect(tokenService.deleteToken()).rejects.toThrow("Network Error");
    });
  });
  
});
