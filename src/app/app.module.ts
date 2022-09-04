import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './Components/header/header.component';
import { SideMenuComponent } from './Components/side-menu/side-menu.component';
import { SideMenuItemComponent } from './Components/side-menu/side-menu-item/side-menu-item.component';
import { HomeComponent } from './Pages/home/home.component';
import { MyCoursesComponent } from './Pages/my-courses/my-courses.component';
import { CourseCardComponent } from './Components/my-courses/course-card/course-card.component';
import { TutorCardComponent } from './Components/my-tutors/tutor-card/tutor-card.component';
import { MyTutorsComponent } from './Pages/my-tutors/my-tutors.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialsModule } from './Materials/materials.module';

import { LoginComponent } from './Pages/login/login.component';
import { RegisterComponent } from './Pages/register/register.component';
import { MyClassesComponent } from './Pages/my-classes/my-classes.component';
import { MyHistoryComponent } from './Pages/my-history/my-history.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FileUploadComponent } from './Components/file-upload/file-upload.component';
import { CourseDetailViewComponent } from './Components/course-detail-view/course-detail-view.component';
import { FileAttachmentViewComponent } from './Components/file-attachment-view/file-attachment-view.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SideMenuComponent,
    SideMenuItemComponent,
    HomeComponent,
    MyCoursesComponent,
    CourseCardComponent,
    TutorCardComponent,
    MyTutorsComponent,
    LoginComponent,
    RegisterComponent,
    MyClassesComponent,
    MyHistoryComponent,
    FileUploadComponent,
    CourseDetailViewComponent,
    FileAttachmentViewComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MaterialsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
