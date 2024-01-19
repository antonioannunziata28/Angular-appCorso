import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Auth } from '../model/auth';

export const ACCESS_TOKEN = 'demo_access_store';

@Injectable({
  providedIn: 'root'
})

export class AuthService {

  private auth?: Auth;

  constructor() {
    const stored = localStorage.getItem(ACCESS_TOKEN);
    if(stored){
     this.auth = JSON.parse(stored) as Auth;
    }
   }

   getAuth(): Auth | undefined {
    return this.auth;
   }

   login(username: string, password: string) {
    const loginDate = new Date();
    const expirationDate = new Date(loginDate.getTime() + (60 * 60000));
    this.auth = { username, password, loginDate, expirationDate};
    if(username === 'anto28' && password === 'Pass1234'){
      return of(localStorage.setItem(ACCESS_TOKEN, JSON.stringify(this.auth))) && 200;
    } else {
      return 403;
    }
    
   }

   logOut(): Observable<void> {
    this.auth = undefined;
    return of(localStorage.removeItem(ACCESS_TOKEN));
   }
}
