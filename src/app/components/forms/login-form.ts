import { FormControl, FormGroup, Validators } from '@angular/forms';
import { LOGIN_FORM_PASSWORD_MAX_LENGTH } from '@constants/login-form';
import { LoginForm } from '@entities/login-form';

export const createLoginForm = (): FormGroup<LoginForm> => {
  return new FormGroup<LoginForm>({
    email: new FormControl<string>('', {
      nonNullable: true,
      validators: [Validators.required, Validators.email],
    }),
    password: new FormControl<string>('', {
      nonNullable: true,
      validators: [Validators.required, Validators.maxLength(LOGIN_FORM_PASSWORD_MAX_LENGTH)],
    }),
  });
};
