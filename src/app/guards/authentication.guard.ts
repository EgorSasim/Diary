import { Injectable, inject } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/api/authentication/authentication.service';

export const authGuard = () => {
  const authService = inject(AuthenticationService);
  const router = inject(Router);

  return authService.checkAuthentication() ? true : router.navigate(['/login']);
};
