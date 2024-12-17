import { inject } from '@angular/core';
import { CanActivateFn } from '@angular/router';
import { StorageService } from '../../services/storage/storage.service';
import {Router} from '@angular/router';


export const authGuard: CanActivateFn = (route, state) => {
  const storageSer= inject(StorageService);
  const router = inject(Router)
  console.log("authGuard")
if(storageSer.isLoggedIn()){


   return true;
}
router.navigate(['login']);
  return false;


};
