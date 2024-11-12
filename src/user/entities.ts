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

/**
 * Interfaz que define la estructura de los datos del formulario de inicio de sesión.
 * 
 * Esta interfaz es utilizada para garantizar que los datos ingresados por el usuario 
 * en el formulario de inicio de sesión sean correctos antes de ser enviados al sistema para la autenticación.
 * 
 * @interface FormDataLogin
 * 
 * @property {string} email - Correo electrónico del usuario. Debe ser una dirección de correo electrónico válida.
 * @property {string} password - Contraseña del usuario. Debe tener al menos 8 caracteres, contener al menos una mayúscula y un carácter especial.
 */
export interface FormDataLogin {
  /**
  * Correo electrónico del usuario.
  * Debe ser una dirección de correo electrónico válida.
  * 
  * @type {string}
  */
   email: string;

  /**
  * Contraseña del usuario.
  * Debe tener al menos 8 caracteres, contener al menos una letra mayúscula y un carácter especial.
  * 
  * @type {string}
  */
 password: string;
}

/**
 * Interfaz que representa la respuesta de un intento de inicio de sesión exitoso.
 * 
 * Esta interfaz define los campos que se devolverán como parte de la respuesta al intentar iniciar sesión en la aplicación.
 * 
 * @interface User
 * 
 * @property {string} JWT - Token JWT generado después de un inicio de sesión exitoso. Se utiliza para la autenticación de solicitudes posteriores.
 * @property {string} id - Identificador único del usuario registrado en la base de datos.
 * @property {string} email - Correo electrónico del usuario. Es utilizado para la identificación y validación de la cuenta.
 * @property {string} role - Rol del usuario dentro de la aplicación (por ejemplo, "admin", "user", "moderator"). Define los permisos y accesos del usuario.
 */
export interface User {
  /**
   * Token JWT generado tras un inicio de sesión exitoso.
   * Utilizado para autenticar y autorizar las solicitudes del usuario.
   * 
   * @type {string}
   */
  JWT: string;

  /**
   * Identificador único del usuario.
   * 
   * @type {string}
   */
  id: string;

  /**
   * Correo electrónico del usuario.
   * 
   * @type {string}
   */
  email: string;

  /**
   * Rol del usuario dentro de la aplicación (ejemplo: "admin", "user").
   * Define los permisos y el acceso a diversas funcionalidades.
   * 
   * @type {string}
   */
  role: string;
}

export interface Token {
  apiKey: string;
  status: string;
}