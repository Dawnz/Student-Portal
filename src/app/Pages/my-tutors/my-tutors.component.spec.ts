import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyTutorsComponent } from './my-tutors.component';

describe('MyTutorsComponent', () => {
  let component: MyTutorsComponent;
  let fixture: ComponentFixture<MyTutorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyTutorsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyTutorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
