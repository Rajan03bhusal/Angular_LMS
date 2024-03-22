import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class IssueBookService {
  public apiUrl = 'https://localhost:7043/api/';

  constructor(private http: HttpClient) {}

  setBorrow(json: any): Observable<any> {
    return this.http.post(this.apiUrl + 'Borrow/BorrowTsk', {
      json: JSON.stringify(json),
    });
  }
}
