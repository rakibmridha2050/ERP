import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminLayoutComponent } from './admin-layout/admin-layout.component';
import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
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


@NgModule({
  declarations: [
    AdminComponent,
    DashboardComponent,
    TeachersComponent,
    ClassesComponent,
    SubjectsComponent,
    TimetableComponent,
    AttendanceComponent,
    ExamsComponent,
    FeesComponent,
    ReportsComponent,
    AnnouncementsComponent,
    StudentsAddComponent,
    AdminLayoutComponent,
    StudentListComponent,
    
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
