import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';


import {
          LoginService, LocalStorageService, LoginGuardGuard,
          PermissionsService,
        } from './service.index';


@NgModule({
  declarations: [],
  providers: [
    LoginService, LocalStorageService, LoginGuardGuard,
    PermissionsService
  ],
  imports: [
    CommonModule,
    HttpClientModule
  ]
})
export class ServiceModule { }
