import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent implements OnInit{

  username = '';
  password = '';

  constructor(
    private readonly authService: AuthService,
    private readonly snackBar: MatSnackBar,
    private readonly router: Router
  ) {}

  ngOnInit(): void {
      this.logOut();
  }

  login(): void {

    
    if(this.username?.trim().length === 0){
      this.snackBar.open('Username is required');
    } else if(this.password?.trim().length === 0){
      this.snackBar.open('Password is required');
    } else {
      let res = this.authService.login(this.username, this.password);
      if(res === 200) {
        this.snackBar.open(`Bentornato ${this.username}`);
        this.router.navigate(['/']);
      }
      if (res === 403) {
        this.snackBar.open(`Accesso non consentito`);
      }

    }
  }

  logOut(): void {
    this.authService.logOut()
     .subscribe(() => this.snackBar.open('Hai appena effettuato il logout'));
  }
}
