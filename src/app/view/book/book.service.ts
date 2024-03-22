import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class BookService {
  public apiUrl = 'https://localhost:7043/api/';
  constructor(private http: HttpClient) {}

  getBook(json: any): Observable<any> {
    const params = new HttpParams().set('json', JSON.stringify(json));
    return this.http.get(this.apiUrl + 'Book/GetBook', { params });
  }

  setBook(json: any): Observable<any> {
    return this.http.post(this.apiUrl + 'Book/BookTsk', {
      json: JSON.stringify(json),
    });
  }
}
