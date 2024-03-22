import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class NagivationService {
  public apiUrl = 'https://localhost:7043/api/';

  constructor(private http: HttpClient) {}

  getNavigationItem(json: any): Observable<any> {
    const params = new HttpParams().set('json', JSON.stringify(json));
    return this.http.get(this.apiUrl + 'Common/GetNavigation', { params });
  }
  getTotalcount(json: any): Observable<any> {
    const params = new HttpParams().set('json', JSON.stringify(json));
    return this.http.get(this.apiUrl + 'Common/GetTotalCount', {
      params,
    });
  }
}
