import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MyOrderService {
  public apiUrl = 'https://localhost:7043/api/';

  constructor(private http: HttpClient) {}
  getOrderById(json: any): Observable<any> {
    const params = new HttpParams().set('json', JSON.stringify(json));
    return this.http.get(this.apiUrl + 'ViewOrder/GetOrderById', {
      params,
    });
  }
}
