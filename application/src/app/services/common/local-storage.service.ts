import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  constructor() { }

  saveStorage( credentials: any ) {
    localStorage.setItem('name', credentials.name );
    localStorage.setItem('id', credentials.id );
    localStorage.setItem('token', credentials.token );
    localStorage.setItem('username', credentials.username );
  }

  readStorage() {
    const data: any = {};
    data.name     = localStorage.getItem('name');
    data.id       = localStorage.getItem('id');
    data.username = localStorage.getItem('username');
    data.token    = localStorage.getItem('token');
    return data;
  }

  deleteStorage() {
    localStorage.removeItem('name');
    localStorage.removeItem('id');
    localStorage.removeItem('token');
    localStorage.removeItem('username');
  }
}
