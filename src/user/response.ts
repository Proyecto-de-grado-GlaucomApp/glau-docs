/**
 * Interfaz que representa la respuesta de un intento de registro de usuario.
 * 
 * Esta interfaz define los campos que se devolverán como parte de la respuesta al intentar registrar un usuario en la aplicación.
 * 
 * @interface SignUpResponse
 * 
 * @property {boolean} success - Indica si el registro fue exitoso. `true` si el registro fue exitoso, `false` si falló.
 * @property {string[]} [message] - Lista de mensajes adicionales que proporcionan información sobre el resultado del intento de registro.
 *    Este campo es opcional y puede incluir múltiples mensajes de error o confirmación. Ejemplos:
 *    - `["Correo electrónico ya registrado"]` si el correo electrónico ya está en uso.
 *    - `["Usuario creado exitosamente"]` si el registro fue exitoso.
 *    - `["El nombre de usuario ya está en uso"]` si el nombre de usuario proporcionado ya está registrado.
 *    - `["Por favor, verifique la información ingresada"]` si algunos de los campos ingresados son inválidos o faltan.
 */
export interface ValidationResponse {
    /**
     * Indica si el intento de registro fue exitoso o fallido.
     * 
     * @type {boolean}
     */
    success: boolean;

    /**
     * Lista de mensajes adicionales sobre el intento de registro.
     * Este campo es opcional y puede proporcionar más detalles sobre el resultado.
     * 
     * @type {string[]}
     * @optional
     */
    message?: string[];
}