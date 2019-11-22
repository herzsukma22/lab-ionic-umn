import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private _userisAuth = false;

  get userIsAuth(){
    return this._userisAuth;
  }

  constructor() { }

  login() {
    this._userisAuth = true;
  }
  logout() {
    this._userisAuth = false;
  }
}
