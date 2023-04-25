import { Component } from '@angular/core';
import { PostService } from '../../service/Api/post.service';
import { SharedComponent } from 'src/app/service/shared/shared.component';
import {
  MatSnackBar,
  MatSnackBarHorizontalPosition,
  MatSnackBarVerticalPosition,
} from '@angular/material/snack-bar';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css'],
})
export class UserProfileComponent {
  horizontalPosition: MatSnackBarHorizontalPosition = 'start';
  verticalPosition: MatSnackBarVerticalPosition = 'bottom';
  constructor(
    private postService: PostService,
    private SharedService: SharedComponent,
    private _snackBar: MatSnackBar
  ) {}

  userProfileForm = this.SharedService.userProfileForm;
  
  onSubmit() {
    try {
      console.log(this.userProfileForm.value);
      const data: any = this.userProfileForm.value;
      const formdata = new FormData();
      formdata.append('first_name', data.name);
      formdata.append('email', data.email);
      formdata.append('password', data.password);
      formdata.append('image', data.image);
      console.log(formdata);
      this.postService.addUserProfile(formdata).subscribe((res: any) => {
        if (res.code == 200 && res.status == 'success') {
          this._snackBar.open(res.message, 'Close', {
            horizontalPosition: this.horizontalPosition,
            verticalPosition: this.verticalPosition,
          });
          setTimeout(() => {
            window.location.reload();
          }, 3000);
        }
      });
    } catch (error: any) {
      throw error;
    }
  }

  UserNameError() {
    return this.SharedService.UserNameError();
  }

  UserPasswordError() {
    return this.SharedService.UserPasswordError();
  }

  UserImageError() {
    return this.SharedService.UserImageError();
  }

  UserEmailError() {
    return this.SharedService.UserEmailError();
  }
  get name() {
    return this.userProfileForm.get('name');
  }

  get email() {
    return this.userProfileForm.get('email');
  }

  get password() {
    return this.userProfileForm.get('password');
  }

  get image() {
    return this.userProfileForm.get('image');
  }
}
