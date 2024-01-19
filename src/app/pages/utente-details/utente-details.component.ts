import { Component, OnInit } from '@angular/core';
import { Utente } from '../../model/utente';
import { ActivatedRoute, Router } from '@angular/router';
import { catchError, map, switchMap } from 'rxjs';
import { MOCK_MESSAGES } from '../../mock/mock-utenti';
import { UtenteService } from '../../services/utente.service';
import { TitleService } from '../../services/title.service';

@Component({
  selector: 'app-utente-details',
  templateUrl: './utente-details.component.html',
  styleUrl: './utente-details.component.scss'
})
export class UtenteDetailsComponent implements OnInit{

  utente?: Utente;

  constructor(
    private readonly route: ActivatedRoute,
    private readonly utenteService: UtenteService,
    private readonly router: Router,
    private readonly titleService: TitleService
    ) {}
  
  ngOnInit(): void {
    this.route.params.pipe(
      switchMap(params => this.utenteService.getUtenteById(+params['id'])),
      catchError(err => {
        this.router.navigate(['/']);
        alert(err);
        throw err;
      }),
      map((utente: Utente) => {
        this.utente = utente;
        this.titleService.title.next(`Dettaglio utente ${utente.nome}`);
      })
    )
    .subscribe();
  }

  delete(utente: Utente): void {
    this.utenteService.removeUtenteById(utente.id)
    .subscribe(
      () => {
        console.log(`${utente.nome} rimosso correttamente!`);
        this.router.navigate(['/']);
      },
      err => console.error(err)
    );
  }

  private getUtente(id: number): Utente | undefined {
    return MOCK_MESSAGES.find(u => u.id === id);
  }

}
