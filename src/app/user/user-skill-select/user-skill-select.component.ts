import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { PostService } from 'src/app/service/Api/post.service';
import { HelperService } from 'src/app/service/Helper/helper';
import { Router } from '@angular/router';
import {
  MatSnackBar,
  MatSnackBarHorizontalPosition,
  MatSnackBarVerticalPosition,
} from '@angular/material/snack-bar';


interface Option {
  id: string;
  skills: string;
}


@Component({
  selector: 'app-user-skill-select',
  templateUrl: './user-skill-select.component.html',
  styleUrls: ['./user-skill-select.component.css'],
})
export class UserSkillSelectComponent {
  horizontalPosition: MatSnackBarHorizontalPosition = 'start';
  verticalPosition: MatSnackBarVerticalPosition = 'bottom';
  myForm: FormGroup | any; 
  skillList:Option[] = [];

  constructor(
    private postService: PostService,
    private route:Router,
    private _snackBar: MatSnackBar,
    private fb: FormBuilder,
    private helperService: HelperService
  ) {}


  
  selectedSkills:any;

 ngOnInit(){
  this.myForm = this.fb.group({
    selectedSkills: new FormControl('')
    });

  this.postService.getUserSkillList().subscribe((res: any) => {
    console.log("response",res.data);
    let skillListData:any=[]
    res.data.map((data:any)=>{
      skillListData.push(data.skill)
    })
    return (this.skillList =res.data);
  });
 }

  onSubmit(){
    console.log("selected",this.myForm.get('selectedSkills').value)
    try{
      this.postService.addUserSkill({skills:this.myForm.get('selectedSkills').value}).subscribe((res: any) => {
        console.log(res);
        if (res.code == 200 && res.status == 'success') {
          this._snackBar.open(res.message, 'Close', {
            horizontalPosition: this.horizontalPosition,
            verticalPosition: this.verticalPosition,
          });
          this.route.navigate(['user/skillList']);
        }
      });
    }catch(error){
      throw error
    }
  }
}
