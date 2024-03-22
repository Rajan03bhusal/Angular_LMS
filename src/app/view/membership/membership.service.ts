import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MembershipService {
  public apiUrl = 'https://localhost:7043/api/';

  constructor(private http: HttpClient) {}

  getMemberShipList(json: any): Observable<any> {
    const params = new HttpParams().set('json', JSON.stringify(json));
    return this.http.get(this.apiUrl + 'MemberShip/GetMemberShip', { params });
  }
  setMemberShip(json: any): Observable<any> {
    return this.http.post(this.apiUrl + 'MemberShip/MemberShipTsk', {
      json: JSON.stringify(json),
    });
  }
}
