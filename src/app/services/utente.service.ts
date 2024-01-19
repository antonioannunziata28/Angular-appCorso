import { Injectable } from '@angular/core';
import { Utente } from '../model/utente';
import { MOCK_MESSAGES } from '../mock/mock-utenti';
import { Observable, finalize, of, throwError } from 'rxjs';

export const DEMO_USERS_STORE = 'demo_users_store';

@Injectable({
  providedIn: 'root'
})
export class UtenteService {

  utenti: Utente[] = [];
  
  constructor() {
    const stored: string | null = localStorage.getItem(DEMO_USERS_STORE);
    this.utenti = stored ? JSON.parse(stored) : this.save(MOCK_MESSAGES);
   }

   getAllUtenti(): Observable<Utente[]>{
    return of(this.utenti);
   }

   getUtenteById(id: number): Observable<Utente> {
    const utente = this.utenti.find(u => u.id === id);
    return utente ? of(utente) : throwError(`Utente con id ${id} non trovato!`)
   }

   addUtente(utente: Utente): Observable<Utente> {
    this.utenti.push(utente);
    this.deleteFromLs();
    return of(utente)
      .pipe(finalize(() => this.save(this.utenti)));
   }

   removeUtenteById(id: number): Observable<void> {
    const utenteIndex = this.utenti.findIndex(u => u.id === id);
    if(utenteIndex !== -1) {
      this.utenti.splice(utenteIndex, 1);
      this.deleteFromLs();
      return of(undefined)
        .pipe(finalize(() => this.save(this.utenti)));
    }
    return throwError(`Impossibile eliminare, utente con id ${id} non trovato!`)
   }

   private save(utenti: Utente[]): Utente[]{
    localStorage.setItem(DEMO_USERS_STORE, JSON.stringify(utenti));
    return utenti;
   }

   private deleteFromLs() {
    localStorage.removeItem(DEMO_USERS_STORE);
   }
}
