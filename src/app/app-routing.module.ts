import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavigationComponent } from './navigation/navigation.component';
import { UtenteComponent } from './pages/utente/utente.component';
import { UtenteDetailsComponent } from './pages/utente-details/utente-details.component';
import { LoginComponent } from './pages/login/login.component';

const routes: Routes = [
  { path: '',
  component: NavigationComponent,
  children: [
    {
      path: '',
      component: UtenteComponent
    },
    {
      path: 'utente/:id',
      component: UtenteDetailsComponent
    }
  ]
},
{path: 'login',
  component: LoginComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
