import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../../services/service.index';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form: FormGroup;
  userError: string;
  passError: string;
  constructor(
    public _login: LoginService,
    private _router: Router
  ) { }

  ngOnInit() {
    this.form = new FormGroup({
      user: new FormControl('', Validators.required ),
      pass: new FormControl('', Validators.required )
    });
  }

  login() {
    if ( this.form.valid ) {
      this._login.login( this.form.value )
      .subscribe( ( res: any ) => {
        this._router.navigate([ '/landing' ]);
      });
    }
  }
}
