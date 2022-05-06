import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const baseUrl = 'http://localhost:8080';

@Injectable({
  providedIn: 'root',
})
export class TransactionService {
  constructor(private http: HttpClient) {}

  list(): Observable<any> {
    return this.http.get(`${baseUrl}/transactions`);
  }

  findByIdAccount(idAccount: any): Observable<any> {
    return this.http.get(`${baseUrl}/transactions/${idAccount}`);
  }

  create(transaction: any): Observable<any> {
    return this.http.post(`${baseUrl}/transactions`, transaction);
  }
}
