/**
 * Interfaz que define la estructura de los datos del formulario de registro.
 * 
 * Esta interfaz es utilizada para garantizar que los datos ingresados por el usuario 
 * en el formulario de registro tengan el formato correcto antes de ser enviados o procesados.
 * 
 * @interface FormDataSignUp
 * 
 * @property {string} email - Correo electrónico del usuario. Debe ser una dirección válida de correo electrónico.
 * @property {string} username - Nombre de usuario del usuario. Debe tener al menos 3 caracteres.
 * @property {string} password - Contraseña del usuario. Debe tener al menos 8 caracteres, contener al menos una mayúscula y un carácter especial.
 * @property {string} confirmPassword - Confirmación de la contraseña del usuario. Debe coincidir con el campo 'password'.
 * @property {string} hospital - Nombre del hospital o entidad médica. Debe tener al menos 3 caracteres.
 */
export interface FormDataSignUp {
  /**
   * Correo electrónico del usuario.
   * Debe ser una dirección de correo electrónico válida.
   * 
   * @type {string}
   */
  email: string;

  /**
   * Nombre de usuario del usuario.
   * Debe tener al menos 3 caracteres.
   * 
   * @type {string}
   */
  username: string;

  /**
   * Contraseña del usuario.
   * Debe tener al menos 8 caracteres, contener al menos una letra mayúscula y un carácter especial.
   * 
   * @type {string}
   */
  password: string;

  /**
   * Confirmación de la contraseña del usuario.
   * Debe coincidir con el valor del campo 'password'.
   * 
   * @type {string}
   */
  confirmPassword: string;

  /**
   * Nombre del hospital o entidad médica.
   * Debe tener al menos 3 caracteres.
   * 
   * @type {string}
   */
  entity: string;
}