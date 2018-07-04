import {Injectable} from '@angular/core';
import {AuthService} from './_services/auth.service';
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
    const token: string = this.authService.getToken();
    const headers = new HttpHeaders();
    headers.append('Authorization', token); // TODO para continuar depois
    return this.http.get(this.url, {headers});

    // return this.http.get(this.url);
  }

  /*
  const _headers = new HttpHeaders();
+    _headers.append('Access-Control-Allow-Origin', '*');
+
+    var headers = _headers;
+    return this._http.post(this.apiUserUrl, body, {headers});
   */
}
