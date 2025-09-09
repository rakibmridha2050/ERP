import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Student, StudentShowService } from '../services/student-show.service';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.scss']
})
export class StudentListComponent implements OnInit{
  students$: Observable<Student[]> = new Observable();
  constructor(private studentService: StudentShowService) { }
  ngOnInit(): void {
    this.students$ = this.studentService.getStudents();
  }

}
