import { Component, OnInit } from '@angular/core';
import { Http, RequestOptions, Headers } from "@angular/http";
import { NgForm } from "@angular/forms"; 
import { Router } from "@angular/router";


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private http : Http, private router : Router) { }

  ngOnInit() {
  }

  Login(f : NgForm) {
    if(f.value.username == "" || f.value.password == ""){
      alert("Please fill all the blank!")
    }else{
      var x = f.value.username;
      var atpos = x.indexOf("@");
      console.log(atpos);
      var dotpos = x.lastIndexOf(".");
      console.log(dotpos);
      if (atpos<1 || dotpos<atpos+2 || dotpos+2>=x.length) {
        let obj = {
          username : f.value.username,
          password : f.value.password
        }
        let header = new Headers({ "Content-Type" : "application/json"});
        let options = new RequestOptions({ headers : header});
    
        this.http.post("http://localhost:3000/api/user/login", obj, options)
        .subscribe(
          result => {
            console.log(result.json());
            alert("Login Success!");
            this.router.navigate(['/home']);
          },
          error => {
            alert("Please check your username/email and password!");
            console.log("User Not Found")
          }
        )
        }else {
          let x = f.value.username.replace( /\W/g, "");
          let obj = {
            email : x,
            password : f.value.password
          }
          let header = new Headers({ "Content-Type" : "application/json"});
          let options = new RequestOptions({ headers : header});
      
          this.http.post("http://localhost:3000/api/user/loginemail", obj, options)
          .subscribe(
            result => {
              console.log(result.json());
              alert("Login Success!");
              this.router.navigate(['/home']);
            },
            error => {
              alert("Please check your username/email and password!");
              console.log("User Not Found")
            }
          )
        }
  
    }
  
   
  }

}
