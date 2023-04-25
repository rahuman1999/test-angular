import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class HelperService {
  constructor() {}

  getToken() {
    return localStorage.getItem('token') || '';
  }

  loggedIn() {
    console.log('pass');
    return localStorage.getItem('token') != null;
  }

 
  haveAccessToken() {
    let token = localStorage.getItem('token');
    if (token) {
      let extract: any = token.split('.')[1];
      let decode = atob(extract);
      console.log(decode);
      let tokendata = JSON.parse(decode);
      console.log(tokendata);
      return tokendata;
    }
  }

 
}
