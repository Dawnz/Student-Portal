import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-courses',
  templateUrl: './my-courses.component.html',
  styleUrls: ['./my-courses.component.scss'],
})
export class MyCoursesComponent implements OnInit {
  constructor() {}
  courses = [
    {
      id: 1,
      course: 'Mathematics',
      image: 'assets/images/mathematics.jpg',
      content:
        'The science and study of quality, structure, space, and change.It uses patterns, formulate new conjectures, and establish truth by rigorous deduction from appropriately chosen axioms and definitions.',
    },
    {
      id: 2,
      course: 'English',
      image: 'assets/images/english.jpg',
      content:
        'a study of literature, media and language in which students critically and creatively engage with a variety of texts in all language modes.',
    },
    {
      id: 3,
      course: 'Biology',
      image: 'assets/images/biology.jpg',
      content:
        'the study of living organisms, divided into many specialized fields that cover their morphology, physiology, anatomy, behaviour, origin, and distribution.',
    },
    {
      id: 4,
      course: 'Physics',
      image: 'assets/images/physics.jpg',
      content:
        'The branch of science that deals with the structure of matter and how the fundamental constituents of the universe interact. The study of objects ranging from the very small using quantum mechanics to the entire universe using general relativity.',
    },
    {
      id: 5,
      course: 'Information Technology',
      image: 'assets/images/informationtechnology.jpg',
      content:
        'The use of any computers, storage, networking and other physical devices, infrastructure and processes to create, process, store, secure and exchange all forms of electronic data.',
    },
  ];
  ngOnInit(): void {}
}
