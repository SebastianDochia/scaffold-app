import { Injectable } from '@angular/core';

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

  constructor() {
    // Check if the user is already logged in (e.g., if the user's session is still valid)
    const loggedInUser = localStorage.getItem('loggedInUser');
    if (loggedInUser) {
      this.loggedInUserSubject.next(loggedInUser);
    }
  }

  login(username: string, password: string): Observable<boolean> {
    // Simulate an API call to authenticate the user
    return new Observable<boolean>(observer => {
      setTimeout(() => {
        // In a real application, you would perform authentication logic here
        if (username === 'admin' && password === 'admin') {
          localStorage.setItem('loggedInUser', username);
          this.loggedInUserSubject.next(username);
          observer.next(true); // User authenticated successfully
        } else {
          observer.next(false); // Authentication failed
        }
        observer.complete();
      }, 1000); // Simulate delay of 1 second
    });
  }

  logout(): void {
    // Clear the logged-in user from local storage and notify observers
    localStorage.removeItem('loggedInUser');
    this.loggedInUserSubject.next(null);
  }
}
