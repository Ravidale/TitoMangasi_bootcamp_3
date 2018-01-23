import { Component, OnInit } from '@angular/core';
import { Http, RequestOptions, Headers } from "@angular/http";
import { NgForm } from '@angular/forms';
import {Router} from "@angular/router";


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private http : Http, private router : Router) { }

  ngOnInit() {
    
  }

  

  Signup(f : NgForm) {
    if(f.value.terms == false){
      alert('Please indicate that you have read and agree to the Terms of Service');
      this.router.navigate(['/signup']);
    }else if(f.value.email == "" || f.value.username == "" || f.value.password == "" ){
      alert('Please fill all the blank!');
    }
    else{
      let x = f.value.email.replace( /\W/g, "");
      let obj = {
        email : x,
        username : f.value.username,
        password : f.value.password,
        terms : f.value.terms
      }
      let header = new Headers({ "Content-Type" : "application/json"});
      let options = new RequestOptions({ headers : header});
  
      this.http.post("http://localhost:3000/api/user/new", obj, options)
      .subscribe(
        result => {
          console.log(result.json());
          alert('Registration success!');
          this.router.navigate(['/']);
        },
        error => {
          console.log("Error")
        }
      )
    }
   
  }

}
