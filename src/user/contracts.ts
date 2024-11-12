import * as Yup from 'yup';
import { User } from './entities';

/**
 * Esquema de validación para un objeto `User`
 */
export const userValidationSchema = Yup.object().shape({
  name: Yup.string()
    .trim()
    .min(1, 'El nombre no puede estar vacío')
    .required('El nombre es obligatorio'),

  hospital: Yup.string()
    .trim()
    .min(1, 'El hospital no puede estar vacío')
    .required('El hospital es obligatorio'),

  email: Yup.string()
    .email('El correo electrónico no tiene un formato válido')
    .required('El correo electrónico es obligatorio')
});

/**
 * Función para validar un usuario
 * @param {User} user El objeto de usuario
 * @returns {Promise<boolean>} Retorna una promesa con `true` si la validación es exitosa, `false` si falla
 */
export const validateUser = async (user: User): Promise<boolean> => {
  try {
    await userValidationSchema.validate(user);
    return true; // Si la validación es exitosa
  } catch (error) {
    console.error('Error de validación:', error);
    return false; // Si la validación falla
  }
};