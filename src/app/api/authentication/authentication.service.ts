import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  private isAuthenticated: boolean = false;

  public checkAuthentication(): boolean {
    return this.isAuthenticated;
  }
}
