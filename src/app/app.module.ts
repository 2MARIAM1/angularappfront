import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { EmployeeService } from './employee.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';
import { AngularFireModule} from '@angular/fire/compat';
import { AngularFireAuthModule} from '@angular/fire/compat/auth';

import { environment } from 'src/environments/environment';



//initializeApp(environment.firebase);

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    
  ],
  
  imports: [
    BrowserModule,
    //provideFirebaseApp(() => initializeApp(environment.firebase)),
    //provideAuth(() => getAuth()),

    AngularFireModule.initializeApp(
       environment.firebase
     ),
     AngularFireAuthModule,
    
    HttpClientModule , FormsModule, AppRoutingModule,
   
  ],
  providers: [
    
    EmployeeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
