import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './shared/material.module';
import { NavigationComponent } from './navigation/navigation.component';
import { UtenteComponent } from './pages/utente/utente.component';
import { UtenteDetailsComponent } from './pages/utente-details/utente-details.component';
import { FormsModule } from '@angular/forms';
import { CreateUsersDialogComponent } from './components/create-users-dialog/create-users-dialog.component';
import { LoginComponent } from './pages/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    UtenteComponent,
    UtenteDetailsComponent,
    CreateUsersDialogComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
