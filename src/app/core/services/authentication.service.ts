import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  protected mockUser: any = {
    name: 'Daniel Mercy',
    id: 'akjdbada;dfakdfa-dadjfladf0adfad-dfajdlfad=',
    avatar: '../../../assets/images/face.jpg'
  }

  constructor() { }

  public get ID(): string {
    return this.mockUser.id;
  }

  public get currentUser() {
    return this.mockUser;
  }

  public get isAuthenticated(): boolean {
    return true
  }
}
