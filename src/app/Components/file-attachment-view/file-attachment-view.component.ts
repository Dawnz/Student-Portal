import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CourseWorkService } from 'src/app/Services/course-work.service';

@Component({
  selector: 'app-file-attachment-view',
  templateUrl: './file-attachment-view.component.html',
  styleUrls: ['./file-attachment-view.component.scss'],
})
export class FileAttachmentViewComponent implements OnInit {
  attachments: [] = [];
  constructor(
    private courseworkAPI: CourseWorkService,
    @Inject(MAT_DIALOG_DATA) private data: any
  ) {}

  ngOnInit(): void {
    this.getAllAttachments();
  }
  getAllAttachments() {
    this.courseworkAPI
      .getAllCourseworkById(this.data.courseId)
      .subscribe((data) => console.log(data.result));
  }
}
