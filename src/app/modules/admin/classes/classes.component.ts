import { Component, OnInit } from '@angular/core';



interface SchoolClass {
  id: number;
  name: string;
  section: string;
  classTeacher: string;
  totalStudents: number;
}
@Component({
  selector: 'app-classes',
  templateUrl: './classes.component.html',
  styleUrls: ['./classes.component.scss']
})
export class ClassesComponent implements OnInit {
  classes: SchoolClass[] = [];
  newClass: SchoolClass = {
    id: 0,
    name: '',
    section: '',
    classTeacher: '',
    totalStudents: 0
  };
  isEdit = false;

  ngOnInit(): void {
    // sample data
    this.classes = [
      { id: 1, name: 'Class 6', section: 'A', classTeacher: 'Mr. Rahman', totalStudents: 35 },
      { id: 2, name: 'Class 7', section: 'B', classTeacher: 'Ms. Jahan', totalStudents: 40 }
    ];
  }

  saveClass() {
    if (this.isEdit) {
      const index = this.classes.findIndex(c => c.id === this.newClass.id);
      if (index !== -1) this.classes[index] = { ...this.newClass };
      this.isEdit = false;
    } else {
      this.newClass.id = this.classes.length + 1;
      this.classes.push({ ...this.newClass });
    }
    this.resetForm();
  }

  editClass(c: SchoolClass) {
    this.newClass = { ...c };
    this.isEdit = true;
  }

  deleteClass(id: number) {
    this.classes = this.classes.filter(c => c.id !== id);
  }

  resetForm() {
    this.newClass = { id: 0, name: '', section: '', classTeacher: '', totalStudents: 0 };
    this.isEdit = false;
  }
}
