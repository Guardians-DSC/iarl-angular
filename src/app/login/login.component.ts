import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { ViewContainerRef } from '@angular/core';
import { AuthService } from '../_services/auth.service';
import { FormControl, FormGroupDirective, NgForm, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import {MatSnackBar} from '@angular/material';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {

  private _model: any = {};
  private _loginForm: FormGroup;
  constructor(private _vRef: ViewContainerRef,
              private _auth: AuthService,
              private _fb: FormBuilder,
              private _router: Router,
              private _toastr: ToastrService,
              private _snackBar: MatSnackBar,
    ) {
    this.createForm();
  }

  openSnackBar(message) {
    this._snackBar.open(message, null, {
      duration: 1000,
    });
  }

  ngOnInit() {
  }

  createForm() {
    this._loginForm = this._fb.group({
      username: [null, [Validators.required]],
      password: [null, [Validators.required, Validators.minLength(8)]],
    });
  }

  login() {
    if (!this._loginForm.valid) {
      // this._toastr.warning('Usuário ou senha inválido!', 'Alerta!');
      this.openSnackBar('Usuário ou senha inválido!');
    } else {
      this._model = this._loginForm.value;
      this._auth.login(this._model).subscribe(res => {
        const token = res.json();
        if (token) {
          this._auth.setSession(token);
          this.openSnackBar('Login realizado com suceso'); // TODO: não tem sentido ter esse comentário aqui
          // this.router.navigate(['deskboard']);
        }
      }, err => {
        console.log(err);
        this.openSnackBar('Ocorreu um erro ao Logar!');
      });
    }

  }
}
