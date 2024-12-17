import { Routes } from '@angular/router';
import { authGuard } from './core/guards/auth/auth.guard';

export const routes: Routes = [
    {path :'' , loadChildren : ()=> import('./auth/auth.module').then(m=> m.AuthModule)} ,
    {path : 'admin', loadChildren : ()=> import('./feature/admin/admin.module').then(m=> m.AdminModule) }
];
