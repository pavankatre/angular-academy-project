// import { Injectable } from '@angular/core';
// const USER_KEY = 'auth-user';
// @Injectable({
//   providedIn: 'root'
// })
// export class StorageService {

//   constructor() { }


//  public clean() {
//     sessionStorage.clear()
//   }

//   public saveUser(user: any): void {
//     console.log(user)
//     sessionStorage.removeItem(USER_KEY);
//     sessionStorage.setItem(USER_KEY, JSON.stringify(user))
//   }

//   public getUser() {
//     const user = sessionStorage.getItem(USER_KEY);
//     if (user) {
//       return JSON.parse(user);
//     }
//     return null;
//   }

//   public isLoggedIn(): boolean {
//     const user = sessionStorage.getItem(USER_KEY);
//     if (user) {
//       return true;
//     }
//     return false;
//   }


// }

import { Injectable } from '@angular/core';

const USER_KEY = 'auth-user';

@Injectable({
  providedIn: 'root',
})
export class StorageService {
  constructor() {}

  private isBrowser(): boolean {
    return typeof window !== 'undefined' && typeof sessionStorage !== 'undefined';
  }

  public clean(): void {
    if (this.isBrowser()) {
      sessionStorage.clear();
    }
  }

  public saveUser(user: any): void {
    debugger
    if (this.isBrowser()) {
      sessionStorage.removeItem(USER_KEY);
      sessionStorage.setItem(USER_KEY, JSON.stringify(user));
    }
  }

  public getUser(): any {
    if (this.isBrowser()) {
      const user = localStorage.getItem(USER_KEY);
      return user ? JSON.parse(user) : null;
    }
    return null;
  }

  public isLoggedIn(): boolean {
    debugger
    if (this.isBrowser()) {
      return !!sessionStorage.getItem(USER_KEY);
    }
    return false;
  }
}

