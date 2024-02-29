import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { JwtToken } from '../../services/jwt-token';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})

export class LoginComponent {
  title: string = "GC-FaMS"
  subTitle: string = "Faculty Profiling and Development Monitoring System"

  url = 'http://localhost:8080/GC-FaMS-API/API/login';
  fb = inject(FormBuilder);
  http = inject(HttpClient);
  authService = inject(AuthService);
  router = inject(Router);

  //Login form object
  loginForm = this.fb.nonNullable.group({
    email: ['', Validators.required],
    password: ['', Validators.required],
  });

  constructor(){}

  onLogin(): void{
    //Main http post request, uses JwtToken interface, and stringified loginForm
    this.http.post<JwtToken>(this.url, JSON.stringify(this.loginForm.getRawValue())).subscribe((response) => {
      //Success, wrong loginparams, and query error issue.
      if(response.code == 200){
        console.log("Login Authenticated.")
        document.cookie = "token=" + response.token;
      }
      else if(response.code == 403){
        console.log("Invalid parameters: ");
        console.log(response);
      }
      else if(response.code == 404){
        console.log("Invalid query: ")
        console.log(response);
      }
    })
  }
}
