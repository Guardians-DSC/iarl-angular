import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class AuthService {

  private url = 'http://localhost:3000/api/login';
  private TOKEN = 'token';
  constructor(private http: HttpClient) { }


  login(body: any) {
    return this.http.post(this.url , body);
  }

  setSession(authData: any) {
    localStorage.setItem(this.TOKEN, authData['token']);
  }

  getToken() {
    return localStorage.getItem(this.TOKEN);
  }

  revokeSession() {
    localStorage.removeItem(this.TOKEN);
  }
}
