import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { TitleService } from '../services/title.service';
import { AuthService } from '../services/auth.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { map } from 'rxjs';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrl: './navigation.component.scss'
})
export class NavigationComponent implements OnInit {

  title: string = '';
  username?: string;

  constructor(
    private readonly authService: AuthService,
    private readonly snackBar: MatSnackBar,
    private readonly titleService: TitleService,
    private readonly ref: ChangeDetectorRef,
    private readonly router: Router,
  ) {}

  ngOnInit(): void {
   this.username =this.authService.getAuth()?.username;
      this.titleService.title
       .pipe(
        map(title => {
          this.title = title;
          this.ref.detectChanges();
        })
       )
       .subscribe();
       
  }

  logOut(){
    this.authService.logOut()
     .subscribe(() => this.snackBar.open('Hai appena effettuato il logout'));
     this.router.navigate(['login']);
  }
}
