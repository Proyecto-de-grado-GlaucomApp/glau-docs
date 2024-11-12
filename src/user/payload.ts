/**
 * Interfaz que define la estructura de los datos enviados a la API.
 * 
 * @interface ApiSignUpPayload
 * 
 * @property {string} email - Correo electrónico del usuario.
 * @property {string} plainPassword - Contraseña en formato de texto plano.
 * @property {string} contactName - Nombre completo del contacto.
 * @property {string} entity - Nombre del hospital o entidad médica.
 */
export interface SignUpPayload {
    email: string;
    plainPassword: string;
    contactName: string;
    entity: string;
  }