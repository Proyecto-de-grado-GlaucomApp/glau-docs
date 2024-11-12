/**
 * Servicio para gestionar la autenticación del usuario.
 * Este servicio maneja la verificación del estado de autenticación,
 * el almacenamiento del usuario en el localStorage y el manejo del login y logout.
 */
export const authService = {
    /**
     * Verifica si el usuario está autenticado.
     * Verifica si hay un usuario guardado en el localStorage.
     * 
     * @returns {boolean} Retorna `true` si el usuario está autenticado (existe en localStorage), de lo contrario `false`.
     */
    isAuthenticated: (): boolean => {
      const user = localStorage.getItem('user');
      return user !== null;
    },
  
    /**
     * Obtiene el usuario almacenado en el localStorage.
     * 
     * @returns {string | null} El usuario almacenado en formato `User` si existe, o `null` si no se encuentra.
     */
    getUser: (): string | null => {
      const user = localStorage.getItem('user');
      return user ? JSON.parse(user) : null;
    },
  
    /**
     * Simula el inicio de sesión almacenando un usuario en el localStorage.
     * 
     * @param {string} string - El objeto de usuario a almacenar en localStorage.
     * @returns {void} No retorna ningún valor.
     */
    login: (user: string): void => {
      localStorage.setItem('user', JSON.stringify(user));
    },
  
    /**
     * Simula el cierre de sesión eliminando el usuario almacenado en el localStorage.
     * 
     * @returns {void} No retorna ningún valor.
     */
    logout: (): void => {
      localStorage.removeItem('user');
  }
};

