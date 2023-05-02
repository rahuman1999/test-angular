import { Component } from '@angular/core';
import { PostService } from 'src/app/service/Api/post.service';
import { HelperService } from 'src/app/service/Helper/helper';
import { ThemePalette } from '@angular/material/core';
import { ProgressSpinnerMode } from '@angular/material/progress-spinner';

@Component({
  selector: 'app-user-skill-list',
  templateUrl: './user-skill-list.component.html',
  styleUrls: ['./user-skill-list.component.css']
})
export class UserSkillListComponent {

  constructor(
    private postService: PostService,
    private helperService: HelperService
  ) {}

  displayedColumns: string[] = ['Id', 'Skills'];
  userSkillList: any = [];
  color: ThemePalette = 'primary';
  mode: ProgressSpinnerMode = 'indeterminate';
  value = 50;

  ngOnInit(): void {
    this.postService.getUserSelectedSkillList().subscribe((res: any) => {
      console.log("response",res.data);
      return (this.userSkillList =res.data);
    });
  }
}
