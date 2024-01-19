import { Component, OnInit, ViewChild } from '@angular/core';
import { Utente } from '../../model/utente';
import { UtenteService } from '../../services/utente.service';
import { Observable, map, switchMap } from 'rxjs';
import { CreateUsersDialogComponent } from '../../components/create-users-dialog/create-users-dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { TitleService } from '../../services/title.service';


@Component({
  selector: 'app-utente',
  templateUrl: './utente.component.html',
  styleUrl: './utente.component.scss'
})
export class UtenteComponent implements OnInit{
  
  utenti: Utente[] = [];
  
  constructor(
    private readonly utenteService: UtenteService,
    private readonly dialog: MatDialog,
    private readonly titleService: TitleService
    ) {
  }

  ngOnInit(): void {
    this.utenteService.getAllUtenti()
     .subscribe((utenti: Utente[]) => {
      this.utenti = utenti;
     });
    
    this.titleService.title.next('Lista degli utenti');
  }

  addUtente(): void {
    this.dialog.open(CreateUsersDialogComponent)
      .afterClosed()
        .pipe(
          switchMap((utente: Utente) => utente ? this.utenteService.addUtente(utente) : new Observable(sub => sub.complete))
        )
        .subscribe(
          (utente: any) => console.log(`Utente ${utente.id} creato con successo`)
        );
  }

}
