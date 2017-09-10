import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { Router } from '@angular/router';

import { User } from '../models/user';

@Injectable()
export class AuthService {

  private authenticated: boolean = false;

  constructor(private http: Http, private router: Router) { }

  setGuards(user: User) {
    if (user.email === 'user@email.com.br' && user.password === '123456') {
      this.authenticated = true;
      this.router.navigate(['home']);
    }  else {
      return this.authenticated = false;
    }
  }
}
