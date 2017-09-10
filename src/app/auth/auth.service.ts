import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { Router } from '@angular/router';
import { EventEmitter } from '@angular/core';

import { User } from '../models/user';

@Injectable()
export class AuthService {

  private authenticated: boolean = false;
  viewMenuEmitter = new EventEmitter<boolean>();
  constructor(private http: Http, private router: Router) { }

  setGuards(user: User) {
    if (user.email === 'user@email.com.br' && user.password === '123456') {
      this.authenticated = true;
      this.viewMenuEmitter.emit(true);
      this.router.navigate(['/home']);
    }  else {
      this.viewMenuEmitter.emit(false);
      this.authenticated = false;
    }
  }

  getUserAuthenticated() {
    return this.authenticated; 
  }
}
