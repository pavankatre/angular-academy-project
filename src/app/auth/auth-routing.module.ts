import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import path from 'path';
import { RegisterComponent } from './components/register/register.component';
import { authGuard } from '../core/guards/auth/auth.guard';

const routes: Routes = [
  {path :'' , redirectTo: 'login',  pathMatch : 'full' },
  {path :'login' ,component: LoginComponent , pathMatch : 'full'},
  {path : 'register' , loadComponent : () => import('../auth/components/register/register.component').then(c=> c.RegisterComponent) }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
