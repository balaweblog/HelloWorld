import { Injectable } from '@angular/core';


@Injectable()
export class LoginService {

  constructor() { }
  login(username: string, password: string) {
    return {username: username};
}

  logout() {
    localStorage.removeItem('currentUser');
}

}
