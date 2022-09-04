import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CourseDetailViewComponent } from '../../course-detail-view/course-detail-view.component';
import { FileUploadComponent } from '../../file-upload/file-upload.component';

@Component({
  selector: 'app-tutor-card',
  templateUrl: './tutor-card.component.html',
  styleUrls: ['./tutor-card.component.scss'],
})
export class TutorCardComponent implements OnInit {
  @Input() tutor: any;
  constructor(public dialog: MatDialog) {}

  openAttachmentModal() {
    this.dialog.open(CourseDetailViewComponent, {
      height: '80vh',
      data: {
        submitted: this.tutor.completedClasswork,
        incomplete: this.tutor.incompleteClasswork,
        courseId: this.tutor.courseId,
      },
    });
  }

  ngOnInit(): void {}
}
