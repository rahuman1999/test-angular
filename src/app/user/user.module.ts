import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserRoutingModule } from './user-routing.module';
import { NavbarComponent } from '../navbar/navbar.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { UserSidebarComponent } from './user-sidebar/user-sidebar.component';
import { MaterialComponentModule } from '../material-component/material-component.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    UserProfileComponent,
    UserSidebarComponent,
    NavbarComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    MaterialComponentModule,
    ReactiveFormsModule,
    FontAwesomeModule
  ],
})
export class UserModule {}
