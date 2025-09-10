import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Student, StudentShowService } from '../services/student-show.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
students$: Observable<Student[]> = new Observable();
  constructor(private studentService: StudentShowService) { }
  ngOnInit(): void {
    this.students$ = this.studentService.getStudents();
  }
}
