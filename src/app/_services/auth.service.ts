import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';

@Injectable()
export class AuthService {

  private url = 'http://localhost:3000/api/login';
  private TOKEN: string = 'token';
  constructor(private http: Http) { }


  login(model: any) {
    const body = JSON.stringify(model);
    return this.http.post(this.url , body);
  };

  setSession(authData: any) {
    localStorage.setItem(this.TOKEN, JSON.stringify(authData['token']));
  }

  getToken() {
    return JSON.parse(localStorage.getItem(this.TOKEN));
  }

  revokeSession() {
    localStorage.removeItem(this.TOKEN);
  }
}
