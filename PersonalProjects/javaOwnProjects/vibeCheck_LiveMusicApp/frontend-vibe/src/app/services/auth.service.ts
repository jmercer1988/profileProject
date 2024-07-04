import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {User} from "../model/user";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'http://localhost:8081/api'; // Replace with your actual backend URL

  constructor(private http: HttpClient) { }

  login(credentials: { password: string | undefined; username: string | undefined }): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/login`, credentials);
  }

  register(userData: User): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/register`, userData);
  }

  // Add more methods as needed
}
