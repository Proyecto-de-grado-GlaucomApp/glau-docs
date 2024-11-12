/**
 * Interfaz que representa la respuesta de un intento de inicio de sesión.
 * 
 * Esta interfaz define los campos que se devolverán como parte de la respuesta al intentar iniciar sesión en la aplicación.
 * 
 * @interface LoginResponse
 * @property {boolean} success - Indica si el inicio de sesión fue exitoso. `true` si fue exitoso, `false` si falló.
 * @property {string[]} [message] - Lista de mensajes adicionales que proporcionan información sobre el resultado del intento de inicio de sesión.
 *    Este campo es opcional y puede incluir múltiples mensajes de error o confirmación. Por ejemplo:
 *    - `["Correo electrónico no registrado"]` si el correo electrónico no está registrado en la base de datos.
 *    - `["Contraseña incorrecta"]` si la contraseña ingresada no coincide con la registrada.
 *    - `["Cuenta desactivada"]` si la cuenta del usuario está desactivada por alguna razón.
 *    - `["Inicio de sesión exitoso"]` si el inicio de sesión fue exitoso.
 */
export interface SignUpResponse {
    success: boolean;
    message?: string[];
}