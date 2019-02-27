import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';


import {
          LoginService, LocalStorageService, LoginGuardGuard
        } from './service.index';


@NgModule({
  declarations: [],
  providers: [
    LoginService, LocalStorageService, LoginGuardGuard
  ],
  imports: [
    CommonModule,
    HttpClientModule
  ]
})
export class ServiceModule { }
