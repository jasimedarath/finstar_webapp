import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) {}

  protocol: string = 'http';
  serverName: string = 'localhost';
  portNo: number = 8080;

  getAll<T>(url: string): Observable<T> {
    return this.http.get<T>(`${this.generateUrl()}${url}`);
  }

  getById<T>(url: string, id: string): Observable<T> {
    return this.http.get<T>(`${this.generateUrl()}${url}/${id}`);
  }

  post<T>(url: string, data: any): Observable<T> {
    return this.http.post<T>(`${this.generateUrl()}${url}`, data);
  }
  
  put<T>(url: string, id: string, data: any): Observable<T> {
    return this.http.put<T>(`${this.generateUrl()}${url}/${id}`, data);
  }

  delete<T>(url: string, id: string): Observable<T> {
    return this.http.delete<T>(`${this.generateUrl()}${url}/${id}`);
  }

  generateUrl() {
    return `${this.protocol}://${this.serverName}:${this.portNo}/`
  }

}
