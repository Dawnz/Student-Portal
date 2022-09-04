import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { Student } from 'src/app/Interfaces/student';
import { StudentService } from 'src/app/Services/student.service';
import { User } from '../../Interfaces/user';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  constructor(private studentAPI: StudentService, private router: Router) {}
  signupForm: FormGroup = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    username: new FormControl(''),
    password: new FormControl(''),
  });

  get firstName() {
    return this.signupForm.get('firstName')?.value;
  }
  get lastName() {
    return this.signupForm.get('lastName')?.value;
  }
  get username() {
    return this.signupForm.get('username')?.value;
  }
  get password() {
    return this.signupForm.get('password')?.value;
  }

  ngOnInit(): void {}
  signup() {
    const student: Student = {
      studentId: null,
      firstName: this.firstName,
      lastName: this.lastName,
      username: this.username,
      password: this.password,
    };
    this.signupForm.reset();
    this.studentAPI.createStudent(student).subscribe();
    this.router.navigateByUrl('/login');
  }
}
