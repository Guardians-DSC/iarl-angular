import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { API_URL, AUTH_ENDPOINT } from '../_constants/constants';

@Injectable()
export class AuthService {

  private url = `${API_URL}${AUTH_ENDPOINT}`;
  private TOKEN = 'token';
  constructor(private http: Http) { }


  public login(body: any) {
    // console.log(this.url);
    const headers: Headers = new Headers();
    headers.append('Access-Control-Allow-Origin', '*');

    return this.http.post(this.url , body, { headers });
  }

  public setSession(authData: any) {
    localStorage.setItem(this.TOKEN, JSON.stringify(authData['token']));
  }

  public getToken() {
    return JSON.parse(localStorage.getItem(this.TOKEN));
  }

  public revokeSession() {
    localStorage.removeItem(this.TOKEN);
  }
}
