import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagesComponent } from './pages.component';
import { LandingComponent } from './landing/landing.component';
import { PagesRoutingModule } from './pages.routes';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { DashboardComponent } from './dashboard/dashboard.component';

@NgModule({
  declarations: [
    PagesComponent,
    LandingComponent,
    NavbarComponent,
    SidebarComponent,
    DashboardComponent
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
  ],
  exports: [],
  providers: []
})
export class PagesModule { }
