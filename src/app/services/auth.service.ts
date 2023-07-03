import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import {
  BehaviorSubject,
  Observable,
} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private loggedInUserSubject: BehaviorSubject<string | null> = new BehaviorSubject<string | null>(null);
  public loggedInUser$: Observable<string | null> = this.loggedInUserSubject.asObservable();

  constructor(
    private http: HttpClient,
    private router: Router
  ) {
    // Check if the user is already logged in (e.g., if the user's session is still valid)
    const loggedInUser = localStorage.getItem('loggedInUser');
    if (loggedInUser) {
      this.loggedInUserSubject.next(loggedInUser);
    }
  }

  login(username: string, password: string) {
    this.http.post<any>('http://localhost:3000/auth/login', { name: username, password }).subscribe(response => {
      // In a real application, you would perform authentication logic here
      localStorage.setItem('loggedInUser', username);
      localStorage.setItem('access_token', response.access_token)
      this.loggedInUserSubject.next(username);
      this.router.navigate(['/dashboard']);
    },
      error => {
        console.error("LOGIN ERROR");
        console.error(error);
      });
  }

  signUp() {

  }

  logout(): void {
    // Clear the logged-in user from local storage and notify observers
    localStorage.removeItem('loggedInUser');
    localStorage.removeItem('access_token');
    this.loggedInUserSubject.next(null);
  }
}
