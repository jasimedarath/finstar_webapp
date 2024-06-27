import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { Router } from '@angular/router';
import { MatButton } from '@angular/material/button';
import { ApiService } from 'src/app/services/api.service';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login-screen',
  standalone: true,
  imports: [MatInputModule, FormsModule, MatButton],
  templateUrl: './login-screen.component.html',
  styleUrl: './login-screen.component.scss',
})
export class LoginScreenComponent implements OnInit {
  userName: any;
  password: any;
  isAuthenticated: boolean = false;

  constructor(private router: Router, private authService: AuthService) {}

  ngOnInit(): void {
    this.authService.isAuthenticated = false;
  }

  async loginApp() {
    const data = {
      userName: this.userName,
      password: this.password,
    };

    try {
      const isAuthenticated = await this.authService.authenticateUser(data);
      if (isAuthenticated) {
        this.router.navigate(['/home/dashboard']);
      } else {
        console.log('Error logging in');
      }
    } catch (error) {
      console.error('Authentication failed:', error);
    }
  }
}
