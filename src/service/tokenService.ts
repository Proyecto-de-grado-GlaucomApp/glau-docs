import { Token } from "@/user/entities";
import { authService } from "./authService";
import { TokenAction, tokenEndpoints } from "@/utils/constants";

export const tokenService = {
    getToken,
    createToken,
    deleteToken,
}

  
export async function getToken(): Promise<Token | null> {
    try {
        const user = await authService.getUser();

        if (!user || !user.id || !user.JWT) {
            throw new Error('Usuario no autenticado o ID de usuario no disponible. Por favor, inicie sesión.');
        }

        const headers: HeadersInit = {
            'Authorization': `Bearer ${user.JWT}`,
            'Content-Type': 'application/json',
        };

        const response = await fetch(`${tokenEndpoints[TokenAction.GET]}${user.id}`, {
            method: 'GET',
            headers: headers,
        });

        if (response.status === 404) {
            return null;
        }
        const responseBody = await response.json();  // Obtiene el cuerpo de la respuesta como un objeto JSON

        // Ahora puedes acceder a las propiedades del objeto
        return {
            apiKey: responseBody.apiKey,
            status: responseBody.status
        };
    } catch {
        
        return null;
    }
}

export async function createToken(): Promise<boolean> {
    try {
        const user = await authService.getUser();

        if (!user || !user.id || !user.JWT) {
            throw new Error('Usuario no autenticado o ID de usuario no disponible. Por favor, inicie sesión.');
        }

        const headers: HeadersInit = {
            'Authorization': `Bearer ${user.JWT}`,
            'Content-Type': 'application/json',
        };

        const response = await fetch(`${tokenEndpoints[TokenAction.CREATE]}${user.id}`, {
            method: 'POST',
            headers: headers,
        });

        if (!response.ok) {
            return false;
        }

        return true;
    } catch {
        return false;
    }
}

export async function deleteToken(): Promise<void> {
    try {
        const user = await authService.getUser();

        if (!user || !user.id || !user.JWT) {
            throw new Error('Usuario no autenticado o ID de usuario no disponible. Por favor, inicie sesión.');
        }

        const headers: HeadersInit = {
            'Authorization': `Bearer ${user.JWT}`,
            'Content-Type': 'application/json',
        };

        const response = await fetch(`${tokenEndpoints[TokenAction.DELETE]}${user.id}`, {
            method: 'DELETE',
            headers: headers,
        });

        if (!response.ok) {
            throw new Error(`Error: ${response.status}`);
        }

        return;
    } catch (error) {
        console.error('DELETE request failed:', error);
        throw error;
    }
}

  