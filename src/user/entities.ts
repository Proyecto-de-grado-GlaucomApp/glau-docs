/**
 * Interfaz que define la estructura del objeto `User`.
 * Representa a un usuario con información básica sobre su nombre, hospital y correo electrónico.
 */
export interface User {
    /**
     * El nombre completo del usuario.
     * 
     * @type {string}
     */
    name: string;
  
    /**
     * El nombre del hospital asociado al usuario.
     * 
     * @type {string}
     */
    hospital: string;
  
    /**
     * La dirección de correo electrónico del usuario.
     * 
     * @type {string}
     */
    email: string;
  }
  