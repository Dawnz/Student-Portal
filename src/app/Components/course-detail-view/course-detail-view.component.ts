import { Component, Inject, OnInit } from '@angular/core';
import { FileUploadComponent } from '../file-upload/file-upload.component';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FileAttachmentViewComponent } from '../file-attachment-view/file-attachment-view.component';

@Component({
  selector: 'app-course-detail-view',
  templateUrl: './course-detail-view.component.html',
  styleUrls: ['./course-detail-view.component.scss'],
})
export class CourseDetailViewComponent implements OnInit {
  submitted: number = this.data.submitted;
  incomplete: number = this.data.incomplete;
  percentage: number = Math.floor((this.submitted / this.incomplete) * 100);

  constructor(
    public dialog: MatDialog,
    @Inject(MAT_DIALOG_DATA) private data: any
  ) {}

  openAttachmentModal() {
    this.dialog.open(FileUploadComponent);
  }
  viewFileModal() {
    this.dialog.open(FileAttachmentViewComponent, {
      data: {
        courseId: this.data.courseId,
      },
    });
  }
  ngOnInit(): void {
    console.log(this.percentage);
  }
}
