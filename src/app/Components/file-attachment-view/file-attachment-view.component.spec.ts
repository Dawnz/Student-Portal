import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FileAttachmentViewComponent } from './file-attachment-view.component';

describe('FileAttachmentViewComponent', () => {
  let component: FileAttachmentViewComponent;
  let fixture: ComponentFixture<FileAttachmentViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FileAttachmentViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FileAttachmentViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
