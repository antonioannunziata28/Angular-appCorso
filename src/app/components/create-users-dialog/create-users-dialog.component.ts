import { Component, OnInit } from '@angular/core';
import { Utente } from '../../model/utente';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-create-users-dialog',
  templateUrl: './create-users-dialog.component.html',
  styleUrl: './create-users-dialog.component.scss'
})
export class CreateUsersDialogComponent implements OnInit {
  
  utente: Utente;

  constructor(
    private readonly ref: MatDialogRef<CreateUsersDialogComponent>
  ) {
    this.utente = { id: new Date().getTime(), nome: '', sede: '', presentazione: ''};
  }
  
  
  ngOnInit(): void {
    
  }

  close(): void {
    this.ref.close(this.utente);
  }
}
