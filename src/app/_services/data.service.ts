import {Injectable} from '@angular/core';
import {AuthService} from './auth.service';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private url = 'http://localhost:3000/api/directories';

  constructor(private authService: AuthService,
              private http: HttpClient) {
  }

  getFiles() {
    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': this.authService.getToken()
      })
    };
    console.log(httpOptions);
    return this.http.get(this.url, httpOptions);
  }

  /*
  const _headers = new HttpHeaders();
+    _headers.append('Access-Control-Allow-Origin', '*');
+
+    var headers = _headers;
+    return this._http.post(this.apiUserUrl, body, {headers});
   */
}
