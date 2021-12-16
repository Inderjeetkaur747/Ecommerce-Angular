import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public loginForm !: FormGroup;
  constructor(private FormBuilder: FormBuilder, private router: Router) { }

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      email: new FormControl("", [Validators.required, Validators.email]),
      password: new FormControl("", [Validators.required]),
    })
  }
  login() {
    debugger;
    const formDat = this.loginForm.value;
    if (this.loginForm.valid) {
      alert("form Submitted")
    } else {
      alert("validation error")
    }
    if (this.loginForm.invalid) {
      return;
    }
    this.router.navigate(['/product']);

  }

}
