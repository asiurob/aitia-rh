import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/common/login/login.component';

// Servicios
import { ServiceModule } from './services/service.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

// Modulos
import { PagesModule } from './components/pages/pages.module';




@NgModule({
  declarations: [
    AppComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PagesModule,
    ServiceModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
