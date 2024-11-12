import * as Yup from 'yup';

/**
 * Esquema de validación para un formulario de registro de usuario.
 * 
 * Este esquema asegura que los datos ingresados en los campos del formulario cumplan con los requisitos
 * establecidos para cada uno, incluyendo validaciones de formato y longitud.
 * 
 * @typedef {Object} ValidationSchema
 * @property {string} email - Correo electrónico del usuario. Debe ser una dirección válida de correo electrónico y no puede estar vacío.
 * @property {string} username - Nombre de usuario. Debe tener al menos 3 caracteres y no puede estar vacío.
 * @property {string} password - Contraseña del usuario. Debe tener al menos 8 caracteres, contener al menos una letra mayúscula, 
 *    y un carácter especial. No puede estar vacía.
 * @property {string} confirmPassword - Confirmación de la contraseña. Debe coincidir con el campo 'password' y no puede estar vacío.
 * @property {string} hospital - Nombre del hospital. Debe tener al menos 3 caracteres y no puede estar vacío.
 */

/**
 * Esquema de validación de Yup para los campos del formulario de registro.
 * 
 * @type {Yup.ObjectSchema<ValidationSchema>}
 */
export const schemaSignUp = Yup.object().shape({
  /**
   * Valida el correo electrónico.
   * - Debe ser un correo electrónico válido.
   * - Es obligatorio.
   * 
   * @returns {Yup.StringSchema}
   */
  email: Yup.string()
    .email("Correo electrónico no válido")
    .required("Correo electrónico es obligatorio"),

  /**
   * Valida el nombre de usuario.
   * - Debe tener al menos 3 caracteres.
   * - Es obligatorio.
   * 
   * @returns {Yup.StringSchema}
   */
  username: Yup.string()
    .min(3, "El nombre de usuario debe tener al menos 3 caracteres")
    .required("Nombre de usuario es obligatorio"),

  /**
   * Valida la contraseña.
   * - Debe tener al menos 8 caracteres.
   * - Debe contener al menos una letra mayúscula.
   * - Debe contener al menos un carácter especial.
   * - Es obligatorio.
   * 
   * @returns {Yup.StringSchema}
   */
  password: Yup.string()
    .min(8, "La contraseña debe tener al menos 8 caracteres")
    .matches(/[A-Z]/, "La contraseña debe contener al menos una mayúscula")
    .matches(/[^a-zA-Z0-9]/, "La contraseña debe contener al menos un carácter especial")
    .required("Contraseña es obligatoria"),

  /**
   * Valida la confirmación de la contraseña.
   * - Debe coincidir con el campo 'password'.
   * - Es obligatorio.
   * 
   * @returns {Yup.StringSchema}
   */
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password")], "Las contraseñas no coinciden")
    .required("Confirmar contraseña es obligatorio"),

  /**
   * Valida el nombre del hospital.
   * - Debe tener al menos 3 caracteres.
   * - Es obligatorio.
   * 
   * @returns {Yup.StringSchema}
   */
  entity: Yup.string()
    .min(3, "El nombre del hospital debe tener al menos 3 caracteres")
    .required("Nombre del hospital es obligatorio"),
});