import { Injectable, inject } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/api/authentication/authentication.service';

export const authGuard = () => {
  const authService = inject(AuthenticationService);
  const router = inject(Router);

  authService.checkAuthentication().subscribe((isAuthenticated) => {
    console.log('is authenticated:', isAuthenticated);
    if (isAuthenticated) {
      console.log('return true');
      return true;
    } else {
      console.log('router navigate to login');
      return router.navigate(['/login']);
    }
  });
};
