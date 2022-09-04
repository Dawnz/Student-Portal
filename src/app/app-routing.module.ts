import { MyHistoryComponent } from './Pages/my-history/my-history.component';
import { MyClassesComponent } from './Pages/my-classes/my-classes.component';
import { LoginComponent } from './Pages/login/login.component';
import { RegisterComponent } from './Pages/register/register.component';
import { MyTutorsComponent } from './Pages/my-tutors/my-tutors.component';
import { MyCoursesComponent } from './Pages/my-courses/my-courses.component';
import { HomeComponent } from './Pages/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './Guards/auth.guard';
import { CourseDetailViewComponent } from './Components/course-detail-view/course-detail-view.component';
const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent, canActivate: [AuthGuard] },
  { path: 'courses', component: MyCoursesComponent, canActivate: [AuthGuard] },
  {
    path: 'tutors',
    component: MyTutorsComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'tutors/:tutorId',
    component: CourseDetailViewComponent,
    canActivate: [AuthGuard],
  },

  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  { path: 'classes', component: MyClassesComponent, canActivate: [AuthGuard] },
  { path: 'history', component: MyHistoryComponent, canActivate: [AuthGuard] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
