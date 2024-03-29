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
  isLogPage = false;
  options = ['Basic', 'Pro', 'AI']
  selected = 'Pro'

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
    password: new FormControl('', Validators.required),
    subscription: new FormControl(this.selected, Validators.required)
  });

  togglePage() {
    this.isLogPage = !this.isLogPage;
  }

  onSubmitLogIn() {
    this.authService.login(this.logInForm.controls['email'].value, this.logInForm.controls['password'].value);

  }

  onSubmitSignUp() {
    console.log(this.signUpForm.value);
    this.authService.signUp(this.signUpForm.value).subscribe(res => {
      this.togglePage();
    });
  }
}
