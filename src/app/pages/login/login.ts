import { Component, signal } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { Input } from '@app/components/input/input';
import { createLoginForm } from '@app/components/forms/login-form';
import { loginErrorMessages } from '@app/constans/login-form-error';
import { LOGIN_FORM_PASSWORD_MAX_LENGTH } from '@app/constans/login-form';

@Component({
  selector: 'app-login',
  imports: [Input, ReactiveFormsModule],
  templateUrl: './login.html',
  styleUrl: './login.scss',
})
export class Login {
  protected readonly form = signal(createLoginForm());

  protected readonly errorMessages = loginErrorMessages;

  protected readonly passwordMaxLength = LOGIN_FORM_PASSWORD_MAX_LENGTH;
}
