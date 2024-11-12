import { schemaSignUp } from "@/user/contracts";
import { FormDataSignUp } from "@/user/entities";
import { mapFormDataToApiPayload } from "@/user/mapper";
import { ValidationResponse } from "@/user/response";
import { AuthAction, authEndpoints } from "@/utils/constants";
import { ValidationError } from "yup";

/**
 * Servicio de inicio de sesión que contiene la función `signUp`.
 * 
 * Este objeto exporta una función `signUp` que gestiona el proceso de inicio de sesión de un usuario. La función realiza las siguientes operaciones:
 * 1. Valida los datos del usuario utilizando un esquema de validación.
 * 2. Realiza una solicitud a la API para verificar el inicio de sesión.
 * 3. Devuelve una respuesta que indica si el inicio de sesión fue exitoso o no.
 * 
 * @export
 * @type {Object}
 * @property {Function} signUp - Función que maneja el inicio de sesión del usuario.
 */
export const signUpService = {
    signUp
}

/**
 * Función que maneja el proceso de inicio de sesión de un usuario.
 * 
 * Esta función valida los datos del formulario de inicio de sesión (como correo electrónico, nombre de usuario y contraseña), 
 * y luego realiza una solicitud a un servidor para verificar las credenciales del usuario.
 * 
 * @async
 * @function signUp
 * @param {FormDataSignUp} userData - Datos del usuario, que incluyen información como el correo electrónico, nombre de usuario, y contraseña.
 * @returns {Promise<SignUpResponse>} Respuesta con el resultado del intento de inicio de sesión.
 *    - `success: true` si el inicio de sesión fue exitoso.
 *    - `success: false` si hubo un error de validación (con mensajes detallados) o si ocurrió un error en la comunicación con el servidor.
 * 
 * @throws {ValidationError} Si ocurre un error durante las validaciones de Yup.
 * @throws {Error} Si ocurre un error en la solicitud HTTP al servidor.
 */
export async function signUp(userData: FormDataSignUp): Promise<ValidationResponse> {

    // Validaciones del esquema
    try {
        await schemaSignUp.validate(userData, { abortEarly: false });
    } catch (err: unknown) {
        const validationError = err as ValidationError;
        return {
            success: false,
            message: validationError.inner.map(e => e.message) // Devuelve los mensajes de error
        };
    }
    
    // Validaciones del servidor
    try {

        const response = await fetch(authEndpoints[AuthAction.REGISTER], {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(mapFormDataToApiPayload(userData))
        });

        if (response.status === 409) {
            return {
                success: false,
                message: ["Correo ya registrado"]
            };
        }

    } catch (err) {
        const validationError = err as ValidationError;
        return {
            success: false,
            message: validationError.inner.map(e => e.message)
        };
    }

    // Si todas las validaciones son válidas, retorna true
    return {
        success: true,
    };
}