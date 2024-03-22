import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ReturnBookService {
  public apiUrl = 'https://localhost:7043/api/';

  constructor(private http: HttpClient) {}

  getFine(json: any): Observable<any> {
    return this.http.post(this.apiUrl + 'ReturnBook/GetCharge', {
      json: JSON.stringify(json),
    });
  }
  ReturnBook(json: any): Observable<any> {
    return this.http.post(this.apiUrl + 'ReturnBook/ReturnBook', {
      json: JSON.stringify(json),
    });
  }
}
