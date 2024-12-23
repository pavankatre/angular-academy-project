import { CommonModule } from '@angular/common';
import { Component, computed, inject, signal } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterLink, RouterLinkActive, RouterModule, RouterOutlet } from '@angular/router';
import {MatIconModule } from '@angular/material/icon';
import {  MatDrawerMode, MatSidenavModule } from '@angular/material/sidenav'
import { MenuItems } from '../../../../core/models/interfaces/IMenuItems';
import { MatListModule } from '@angular/material/list';
import { AddUserComponent } from '../add-user/add-user.component';
import { ResponsiveService } from '../../../../core/services/responsive/responsive.service';
import { AdminConstents } from '../../../../core/constants/AdminConstents';


@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule,AddUserComponent, RouterOutlet,RouterLink, MatToolbarModule, MatButtonModule,MatIconModule, MatSidenavModule, MatListModule, RouterModule , RouterLinkActive],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {
  constructor(private responsivServ: ResponsiveService) {}
  openSidenav = false;
collapsed = signal(false);
  menuItems= signal<MenuItems[]>(AdminConstents.menuItem);

  sidenavWidth= computed(()=>this.collapsed()? '65px' : '250px');

toggleSidenav() {
  this.openSidenav = !this.openSidenav;
}

// responsivServ= inject(ResponsiveService);


sidenavMode:any  = computed(()=>{
  if(this.responsivServ.smallWidth()){
  return 'over' ;
  }
  return 'side' ;
  })

}
