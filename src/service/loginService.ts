import { schemaLogIn } from "@/user/contracts";
import { FormDataLogin, User } from "@/user/entities";
import { ValidationResponse } from "@/user/response";
import { AuthAction, authEndpoints } from "@/utils/constants";
import { jwtDecode } from "jwt-decode";
import { ValidationError } from "yup";
import { authService } from "./authService";


export const loginService = {
    login
}


export async function login(userData: FormDataLogin): Promise<ValidationResponse> {

    // Validaciones del esquema
    try {
        await schemaLogIn.validate(userData, { abortEarly: false });
    } catch (err: unknown) {
        const validationError = err as ValidationError;
        return {
            success: false,
            message: validationError.inner ? validationError.inner.map(e => e.message) : [], // Devuelve los mensajes de error
        };
    }
    
    let response;
    // Validaciones del servidor
    try {

        response = await fetch(authEndpoints[AuthAction.LOGIN], {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(userData)
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
            message: validationError.inner ? validationError.inner.map(e => e.message) : [],
        };
    }
    if (response) {
        const jwt = await response.text();  // Esto extrae el JWT como texto

        // Decodificar el JWT
        const decoded: any = jwtDecode(jwt); // eslint-disable-line @typescript-eslint/no-explicit-any

        // Extraer el email, id y rol
        const email = decoded.email;
        const id = decoded.sub;
        const role = decoded.role;
        const user: User = {
            JWT: jwt,
            id,
            email,
            role,
        }

        authService.login(user);
    }
    // Si todas las validaciones son válidas, retorna true
    return {
        success: true,
    };
}
