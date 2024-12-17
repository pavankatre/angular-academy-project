import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { authGuard } from '../../core/guards/auth/auth.guard';


const routes: Routes = [
  // {path :'', redirectTo:'dashboard', pathMatch : 'full'},

  { 
    path: '', 
    component: DashboardComponent, 
    canActivate: [authGuard],
    children: [
      // Define child routes here
      { 
        path: 'dashboard', 
        loadComponent: () => import('../admin/components/dashboard-data/dashboard-data.component').then(c => c.DashboardDataComponent), 
        canActivate: [authGuard] 
      },
      { 
        path: 'adduser', 
        loadComponent: () => import('../admin/components/add-user/add-user.component').then(c => c.AddUserComponent), 
        canActivate: [authGuard] 
      }
    ]
  }
];

@NgModule({

  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule {


}













