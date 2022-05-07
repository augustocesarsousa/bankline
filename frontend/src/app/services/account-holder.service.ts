import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

const baseUrl = environment.API_URL;

@Injectable({
  providedIn: 'root',
})
export class AccountHolderService {
  constructor(private http: HttpClient) {}

  list(): Observable<any> {
    return this.http.get(`${baseUrl}/accountholders`);
  }

  create(accountHolder: any): Observable<any> {
    return this.http.post(`${baseUrl}/accountholders`, accountHolder);
  }
}
