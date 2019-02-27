import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { url_backend } from 'src/app/config';
import { map, catchError } from 'rxjs/operators';
import { LocalStorageService } from './local-storage.service';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(
    private _http: HttpClient,
    private _storage: LocalStorageService
  ) { }

  login( credentials: any ): Observable<any> {
    return this._http.post( `${url_backend}/login`, credentials )
    .pipe(
      map( ( res: any ) => {
        this._storage.saveStorage( res.data );
        return true;
      }),
      catchError( (err: any) => {
        console.log( err );
        return throwError( err );
      })
    );
  }
}
