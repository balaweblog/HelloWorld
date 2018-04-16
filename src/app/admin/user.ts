export class User {
  firstname: string;
  lastname: string;
  username: string;
  password: string;
  constructor(firstname: string, lastname: string, username: string, password: string ) {
    this.username = username;
    this.firstname = firstname;
    this.lastname = lastname;
    this.password = password;

  }
}
