import { Component } from '@angular/core';

interface Student {
  id: number;
  name: string;
  class: string;
  present: boolean;
}
@Component({
  selector: 'app-attendance',
  templateUrl: './attendance.component.html',
  styleUrls: ['./attendance.component.scss']
})
export class AttendanceComponent {
  students: Student[] = [
    { id: 1, name: 'Rakib Mridha', class: '10', present: true },
    { id: 2, name: 'John Doe', class: '10', present: false },
    { id: 3, name: 'Jane Smith', class: '9', present: true }
  ];

  markAll(status: boolean) {
    this.students.forEach(student => student.present = status);
  }
}
