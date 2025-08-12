import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs'; 


@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private isAuthenticated = false;

  login(username: string, password: string): Observable<{ username: string; token: string }> {
    // Simulación de llamada asíncrona con setTimeout
    return new Observable(observer => {
      setTimeout(() => {
        if (username === 'user' && password === 'password') {
          this.isAuthenticated = true;
          observer.next({ username, token: 'token-de-ejemplo' });
          observer.complete();
        } else {
          observer.error(new Error('Credenciales inválidas'));
        }
      }, 500);
    });
  }

  logout(): void {
    this.isAuthenticated = false;
  }

  getAuthStatus(): boolean {
    return this.isAuthenticated;
  }
}