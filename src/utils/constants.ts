// URL base del API
export const BASE_URL = "http://3.211.80.218:8000/";

/**
 * Enum que representa las diferentes acciones disponibles para la autenticación de usuarios.
 */
export enum AuthAction {
    REGISTER = 'REGISTER',
    LOGIN = 'LOGIN',
}

/**
 * Objeto que mapea las acciones de autenticación a sus respectivas rutas del API.
 * 
 * @typedef {Object} AuthEndpoints
 * @property {string} REGISTER - Ruta para el registro de usuario.
 * @property {string} LOGIN - Ruta para el inicio de sesión de usuario.
 */
export const authEndpoints: {
    [action in AuthAction]: string;
} = {
    [AuthAction.REGISTER]: BASE_URL + "api/v1/api-key/auth/register",
    [AuthAction.LOGIN]: BASE_URL + 'api/v1/api-key/auth/login',
};

/**
 * Enum que representa las diferentes acciones disponibles para los tokens de EPS.
 */
export enum TokenAction {
    GET = 'GET',
    CREATE = 'CREATE',
    DELETE = 'DELETE',
}

/**
 * Objeto que mapea las acciones de los tokens de EPS a sus respectivas rutas del API.
 * 
 * @typedef {Object} TokenEndpoints
 * @property {string} GET - Ruta para obtener los tokens de usuario.
 * @property {string} CREATE - Ruta para crear un nuevo token de usuario.
 * @property {string} DELETE - Ruta para eliminar un token específico.
 */
export const tokenEndpoints: {
    [action in TokenAction]: string;
} = {
    [TokenAction.GET]: BASE_URL + "api/v1/api-keys/users/",
    [TokenAction.CREATE]: BASE_URL + "api/v1/api-keys/users/",
    [TokenAction.DELETE]: BASE_URL + "api/v1/api-keys/users/",
};
