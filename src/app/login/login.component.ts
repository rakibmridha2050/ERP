import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  email: string = '';
  password: string = '';

  constructor(private router: Router) {}

  onLogin() {
   
    if (this.email === 'admin@gmail.com' && this.password === '12345') {
     
      this.router.navigate(['/admin']);
    } else {
      alert('Invalid Email or Password! please enter a valid email and password');
    }
  }
}
