import { CommonModule } from '@angular/common';
import { Component, computed, signal } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterLink, RouterLinkActive, RouterModule, RouterOutlet } from '@angular/router';
import {MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav'
import { MenuItems } from '../../../../core/models/interfaces/IMenuItems';
import { MatListModule } from '@angular/material/list';
import { AddUserComponent } from '../add-user/add-user.component';


@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule,AddUserComponent, RouterOutlet,RouterLink, MatToolbarModule, MatButtonModule,MatIconModule, MatSidenavModule, MatListModule, RouterModule , RouterLinkActive],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {
  openSidenav = false;
collapsed = signal(false);
  menuItems= signal<MenuItems[]>([
    { icon: 'dashboard',
      label : 'Dashboard',
      route :'dashboard'},

      { icon: 'how_to_reg',
        label : 'Add User',
        route :'adduser'}
        ,

      { icon: 'video_library',
        label : 'Content',
        route :'content'}
        ,

      { icon: 'analytics',
        label : 'Analytics',
        route :'analytics'}
        ,

        { icon: 'comment',
          label : 'Comment',
          route :'comment'}
  ]);

  sidenavWidth= computed(()=>this.collapsed()? '65px' : '250px')




 

toggleSidenav() {
  this.openSidenav = !this.openSidenav;
}
}
