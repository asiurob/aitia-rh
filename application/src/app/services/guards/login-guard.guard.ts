import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

import { map, catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { url_backend } from '../../config';


@Injectable({
  providedIn: 'root'
})
export class LoginGuardGuard implements CanActivate {


  constructor(
    public _http: HttpClient,
    public _router: Router
  ) { }
  canActivate() {
    const token = localStorage.getItem('token') || 'X';
    if ( !token ) {
      return false;
    }

    return this._http.get( `${url_backend}/auth/${token}` )
    .pipe(
      map( () => true ),
      catchError( ( err: any ) => {
        this._router.navigate(['/login']);
        return throwError( err );
      })
    );
  }
}
