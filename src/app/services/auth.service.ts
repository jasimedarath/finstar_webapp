import { Injectable } from '@angular/core';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  isAuthenticated: boolean = false;

  constructor(private apiService: ApiService) { }

  async authenticateUser(data: any): Promise<boolean> {
    return new Promise<boolean>((resolve, reject) => {
      this.apiService.post('finstar/v1/users/login', data).subscribe({
        next: (response: any) => {
          this.isAuthenticated = response.success;
          resolve(this.isAuthenticated);
        },
        error: (error: any) => {
          console.error('API call failed:', error);
          reject(error);
        }
      });
    });
  }

}
