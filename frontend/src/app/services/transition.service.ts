import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const baseUrl = 'http://localhost:8080';

@Injectable({
  providedIn: 'root',
})
export class TransitionService {
  constructor(private http: HttpClient) {}

  list(): Observable<any> {
    return this.http.get(`${baseUrl}/transitions`);
  }

  findByIdAccount(idAccount: any): Observable<any> {
    return this.http.get(`${baseUrl}/transitions/${idAccount}`);
  }

  create(transition: any): Observable<any> {
    return this.http.post(`${baseUrl}/transitions`, transition);
  }
}
