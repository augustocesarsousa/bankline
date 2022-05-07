import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

const baseUrl = environment.API_URL;

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
