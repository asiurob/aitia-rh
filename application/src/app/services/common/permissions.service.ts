import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { url_backend } from 'src/app/config';
import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PermissionsService {

  constructor(
    private _http: HttpClient
  ) { }

  allPermissions(): Observable<any> {
    const token  = localStorage.getItem('token') || 'X';
    const params = new HttpParams()
    .set('token', token );

    return this._http.get( `${url_backend}/permission`, { params } )
    .pipe(
      map( ( res: any ) => res ),
      catchError( (err: any) => {
        console.log( err );
        return throwError( err );
      })
    );
  }
}
