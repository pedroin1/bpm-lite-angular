import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'login',
  },
  {
    path: 'login',
    title: 'BPM Lite - Login',
    loadComponent: () => import('@pages/login/login').then((page) => page.Login),
  },
  {
    path: 'forgot-password',
    title: 'BPM Lite - Esqueci minha senha',
    loadComponent: () =>
      import('@pages/forget-password/forget-password').then((page) => page.ForgetPassword),
  },
];
