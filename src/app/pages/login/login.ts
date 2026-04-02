import { Component, inject, signal } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { Input } from '@components/input/input';
import { createLoginForm } from '@components/forms/login-form';
import { loginErrorMessages } from '@constants/login-form-error';
import { LOGIN_FORM_PASSWORD_MAX_LENGTH } from '@constants/login-form';
import { Main } from '@services/main';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [Input, ReactiveFormsModule, RouterLink],
  providers: [Main],
  templateUrl: './login.html',
  styleUrl: './login.scss',
})
export class Login {
  protected readonly form = signal(createLoginForm());

  protected readonly errorMessages = loginErrorMessages;

  protected readonly passwordMaxLength = LOGIN_FORM_PASSWORD_MAX_LENGTH;

  protected readonly mainService = inject(Main);
}
