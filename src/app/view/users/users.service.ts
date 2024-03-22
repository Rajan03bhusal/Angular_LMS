import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  public apiUrl = 'https://localhost:7043/api/';

  constructor(private http: HttpClient) {}

  getUser(json: any): Observable<any> {
    const params = new HttpParams().set('json', JSON.stringify(json));
    return this.http.get(this.apiUrl + 'User/GetUser', { params });
  }

  setUser(json: any): Observable<any> {
    return this.http.post(this.apiUrl + 'User/UserTsk', {
      json: JSON.stringify(json),
    });
  }
}
