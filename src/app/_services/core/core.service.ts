import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { API_URL, SERVERS_ENDPOINT } from '../../_constants/constants';

@Injectable({
  providedIn: 'root'
})
export class CoreService {

  constructor(private http: Http) { }

  listServers() {
    return this.http.get(API_URL + SERVERS_ENDPOINT);
  }
}
