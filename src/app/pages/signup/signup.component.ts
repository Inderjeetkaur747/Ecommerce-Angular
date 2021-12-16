import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  public signupForm !: FormGroup;
  constructor( private FormBuilder: FormBuilder, private router: Router) { 
  
  }

  ngOnInit(): void {
    this.signupForm = new FormGroup({
      name: new FormControl("", [Validators.required, Validators.minLength(5)]),
     email: new FormControl("", [Validators.required,Validators.email]),
      password: new FormControl("", [Validators.required]),
      mobile: new FormControl("",[Validators.required,Validators.minLength(10)]),
      
    
    })
  }
  signUp(){
    debugger;
  const formDat =this.signupForm.value; 
  if (this.signupForm.valid){
    alert("form Submitted")
  }else{
    alert("validation error")
  }
  if (this.signupForm.invalid) {
    return;
  }
  this.router.navigate(['login']);

  }
 }

