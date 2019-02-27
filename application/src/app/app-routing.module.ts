import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/common/login/login.component';
import { PagesComponent } from './components/pages/pages.component';
import { LoginGuardGuard } from './services/service.index';


const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'landing', component: PagesComponent, canActivate: [LoginGuardGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
