import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';

import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent {
  isLogPage = true;

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  logInForm = new FormGroup({
    email: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required)
  });

  signUpForm = new FormGroup({
    name: new FormControl('', Validators.required),
    email: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required)
  });

  togglePage() {
    this.isLogPage = !this.isLogPage;
  }

  onSubmitLogIn() {
    this.authService.login(this.logInForm.controls['email'].value, this.logInForm.controls['password'].value);

  }

  onSubmitSignUp() {
    console.log(this.signUpForm.value);
  }
}
