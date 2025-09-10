import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminLayoutComponent } from './admin-layout/admin-layout.component';
import { AnnouncementsComponent } from './announcements/announcements.component';
import { AttendanceComponent } from './attendance/attendance.component';
import { ClassesComponent } from './classes/classes.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ExamsComponent } from './exams/exams.component';
import { FeesComponent } from './fees/fees.component';
import { ReportsComponent } from './reports/reports.component';
import { StudentListComponent } from './student-list/student-list.component';
import { StudentsAddComponent } from './students-add/students-add.component';
import { SubjectsComponent } from './subjects/subjects.component';
import { TeachersComponent } from './teachersAdd/teachers.component';
import { TimetableComponent } from './timetable/timetable.component';

const routes: Routes = [
  

  {
    path: '', component: AdminLayoutComponent,
    children: [
      { path: 'studentList', component: StudentListComponent },
      { path: 'studentAdd', component: StudentsAddComponent },
      { path: 'teachers', component: TeachersComponent },
      { path: 'classes', component: ClassesComponent },
      { path: 'subjects', component: SubjectsComponent },
      { path: 'timetable', component: TimetableComponent },
      { path: 'attendance', component: AttendanceComponent },
      { path: 'exams', component: ExamsComponent },
      { path: 'fees', component: FeesComponent },
      { path: 'reports', component: ReportsComponent },
      { path: 'announcements', component: AnnouncementsComponent },
      { path: '**', component: DashboardComponent }

    ]
  }



];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
