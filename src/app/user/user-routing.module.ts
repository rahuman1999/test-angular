import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../guard/auth.guard';
import { NoPageComponent } from '../no-page/no-page.component';
import { NavbarComponent } from '../navbar/navbar.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { UserSidebarComponent } from './user-sidebar/user-sidebar.component';

const routes: Routes = [
  {
    component: UserSidebarComponent,
    path: '',
    children: [
      {
        component: NavbarComponent,
        path: '',
        children: [
          {
            component:UserProfileComponent ,
            path: 'profile',
            canActivate: [AuthGuard],
          },
          { component: NoPageComponent, path: '**' },
        ],
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserRoutingModule {}
