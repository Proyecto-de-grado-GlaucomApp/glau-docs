import { FormDataSignUp } from "./entities";
import { SignUpPayload } from "./payload";

/**
 * Función para mapear los datos de FormDataSignUp al formato ApiSignUpPayload.
 * 
 * @param {FormDataSignUp} formData - Datos del formulario de registro.
 * @returns {ApiSignUpPayload} - Datos formateados para enviar a la API.
 */
export function mapFormDataToApiPayload(formData: FormDataSignUp): SignUpPayload {
    return {
      email: formData.email,
      plainPassword: formData.password,
      contactName: formData.username,
      entity: formData.entity
    };
  }