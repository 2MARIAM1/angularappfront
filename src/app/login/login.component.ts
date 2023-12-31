import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import { GoogleAuthProvider } from 'firebase/auth'; 

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent {

  username: string = '';
  password: string = '';
  errorMessage: string = '';

  constructor(private afAuth: AngularFireAuth, private router: Router) {}

  async onSubmit() {
    try {
      await this.afAuth.signInWithEmailAndPassword(this.username, this.password);
      // If successful, navigate to home page or another route
      this.router.navigate(['/home']);
    } catch (error) {
      this.errorMessage = 'Invalid username or password';
    }
  }

  async loginWithGoogle() {
    try {
      await this.afAuth.signInWithPopup(new GoogleAuthProvider()); // Update this line
      // If successful, navigate to home page or another route
      this.router.navigate(['/home']);
    } catch (error) {
      console.error(error);
      this.errorMessage = 'Failed to log in with Google';
    }
  }
}
