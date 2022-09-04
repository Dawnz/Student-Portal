import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/Services/authentication.service';
import { StudentService } from 'src/app/Services/student.service';

@Component({
  selector: 'app-my-tutors',
  templateUrl: './my-tutors.component.html',
  styleUrls: ['./my-tutors.component.scss'],
})
export class MyTutorsComponent implements OnInit {
  userId: number = 0;
  response: any;
  tutors: [] = [];
  constructor(
    private studentAPI: StudentService,
    private authAPI: AuthenticationService
  ) {
    this.authAPI.user$.subscribe((res) => {
      this.response = res;
      this.userId = this.response?.session.userId;
    });
  }

  // tutors = [
  //   {
  //     id: 1,
  //     title: 'Mr.',
  //     name: 'Steve G. Boerger',
  //     course: 'English',
  //   },
  //   {
  //     id: 2,
  //     title: 'Dr.',
  //     name: 'Brent M. Schroeder',
  //     course: 'Physics',
  //   },
  //   {
  //     id: 3,
  //     title: 'Mrs.',
  //     name: 'Jayne K. Ginyard',
  //     course: 'Information Technology',
  //   },
  //   {
  //     id: 4,
  //     title: 'Dr.',
  //     name: 'Nia A. Soukup',
  //     course: 'Biology',
  //   },
  //   {
  //     id: 5,
  //     title: 'Mr.',
  //     name: 'Leon C. Johnson',
  //     course: 'Mathematics',
  //   },
  // ];

  ngOnInit(): void {
    this.getTutorInfo();
  }

  getTutorInfo() {
    console.log(this.userId);

    this.studentAPI
      .getAllEnrolledDataByStudentId(this.userId)
      .subscribe((data) => (this.tutors = data.result));
  }
}
