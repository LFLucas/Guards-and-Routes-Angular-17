import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Params, Router } from '@angular/router';

@Component({
  selector: 'login-page',
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.css'
})
export class LoginPageComponent {
  
  public loginForm: FormGroup = this.formBuilder.group({
    email: ["", [Validators.required, Validators.email]],
    password: ["", [Validators.required, Validators.minLength(8)]]
  })

 
  constructor(private formBuilder: FormBuilder,
              private router: Router){}

  submit(){
    this.router.navigate(['/dashboard'], { replaceUrl: true,
                                           queryParams: this.loginForm.value})
  }


}
