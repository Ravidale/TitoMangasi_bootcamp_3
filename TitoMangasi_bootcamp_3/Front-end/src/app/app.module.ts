import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule} from "@angular/router";


import { AppComponent } from './app.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { MainComponent } from './main/main.component';

@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    LoginComponent,
    MainComponent
  ],
  imports: [
    BrowserModule, FormsModule,
    HttpModule, 
    RouterModule.forRoot([
      {path : 'home', component : MainComponent},
      {path : '', component : LoginComponent},
      {path : 'signup', component : SignupComponent}

      
      
  ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
