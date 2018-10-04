import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private url = 'http://localhost:3000/api/directories?path=';

  constructor(private authService: AuthService,
              private http: HttpClient) {
  }

  getFiles(path: string) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': this.authService.getToken()
      })
    };

    console.log()
    console.log(this.url + path)
    return this.http.get(this.url + path, httpOptions);
  }

}
