import { LOGIN_FORM_PASSWORD_MAX_LENGTH } from './login-form';

export const loginErrorMessages = {
  email: {
    required: 'E-mail é obrigatório',
    email: 'E-mail inválido',
  },
  password: {
    required: 'Senha é obrigatória',
    maxlength: `Máximo de ${LOGIN_FORM_PASSWORD_MAX_LENGTH} caracteres`,
  },
};
