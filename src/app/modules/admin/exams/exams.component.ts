import { Component } from '@angular/core';

interface Exam {
  id: number;
  name: string;
  date: string;
  class: string;
}
@Component({
  selector: 'app-exams',
  templateUrl: './exams.component.html',
  styleUrls: ['./exams.component.scss']
})
export class ExamsComponent {
  exams: Exam[] = [
    { id: 1, name: 'Math Exam', date: '2025-09-20', class: '10' },
    { id: 2, name: 'English Exam', date: '2025-09-22', class: '10' }
  ];

  newExam: Exam = { id: 0, name: '', date: '', class: '' };

  addExam() {
    if (this.newExam.name && this.newExam.date && this.newExam.class) {
      this.newExam.id = this.exams.length + 1;
      this.exams.push({ ...this.newExam });
      this.newExam = { id: 0, name: '', date: '', class: '' };
    }
  }
}
