import { Component, OnInit } from '@angular/core';
import { FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from "./../../services/auth.service"

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  public emailField: FormControl;
  public passwordField: FormControl;

  constructor(
    private authService: AuthService
  ) {
    this.emailField = new FormControl("", [
      Validators.required,
      Validators.email,
      Validators.minLength(10)
    ]);
    this.emailField.valueChanges.subscribe(value => {
      console.log(value);
    })

    this.passwordField = new FormControl("", [
      Validators.required,
    ]);
  }

  onRegister(){
    if (this.emailField.valid && this.passwordField.valid){
      this.authService.createUser(this.emailField.value, this.passwordField.value);
    }
  }

  ngOnInit(): void {
  }

}
