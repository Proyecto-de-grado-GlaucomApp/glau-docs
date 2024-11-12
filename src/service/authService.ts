import { User } from "@/user/entities";

/**
 * Service to manage user authentication.
 * This service handles the verification of authentication status,
 * user storage in localStorage, and login/logout management.
 */
export const authService = {
    /**
     * Checks if the user is authenticated.
     * Verifies if there is a user stored in localStorage.
     * 
     * @returns {boolean} Returns `true` if the user is authenticated (exists in localStorage), otherwise `false`.
     */
    isAuthenticated: (): boolean => {
      const user = localStorage.getItem('user');
      return user !== null;
    },
  
    /**
     * Retrieves the stored user from localStorage.
     * 
     * @returns {User | null} The stored user in `User` format if present, or `null` if not found.
     */
    getUser: (): User | null => {
      const user = localStorage.getItem('user');
      return user ? JSON.parse(user) : null;
    },
  
    /**
     * Simulates the login process by storing a user in localStorage.
     * 
     * @param {User} user - The user object to store in localStorage.
     * @returns {void} No return value.
     */
    login: (user: User): void => {
      localStorage.setItem('user', JSON.stringify(user));
    },
  
    /**
     * Simulates the logout process by removing the stored user from localStorage.
     * 
     * @returns {void} No return value.
     */
    logout: (): void => {
      localStorage.removeItem('user');
    }
};
