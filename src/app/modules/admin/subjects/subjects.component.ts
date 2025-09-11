import { Component, OnInit } from '@angular/core';


interface Department {
  id: number;
  name: string;
  head: string;
  totalTeachers: number;
}
@Component({
  selector: 'app-subjects',
  templateUrl: './subjects.component.html',
  styleUrls: ['./subjects.component.scss']
})
export class SubjectsComponent  implements OnInit {
  departments: Department[] = [];
  newDepartment: Department = {
    id: 0,
    name: '',
    head: '',
    totalTeachers: 0
  };
  isEdit = false;

  ngOnInit(): void {
    // sample initial data
    this.departments = [
      { id: 1, name: 'Science', head: 'Dr. Karim', totalTeachers: 15 },
      { id: 2, name: 'Arts', head: 'Ms. Laila', totalTeachers: 10 }
    ];
  }

  saveDepartment() {
    if (this.isEdit) {
      const index = this.departments.findIndex(d => d.id === this.newDepartment.id);
      if (index !== -1) this.departments[index] = { ...this.newDepartment };
      this.isEdit = false;
    } else {
      this.newDepartment.id = this.departments.length + 1;
      this.departments.push({ ...this.newDepartment });
    }
    this.resetForm();
  }

  editDepartment(dep: Department) {
    this.newDepartment = { ...dep };
    this.isEdit = true;
  }

  deleteDepartment(id: number) {
    this.departments = this.departments.filter(d => d.id !== id);
  }

  resetForm() {
    this.newDepartment = { id: 0, name: '', head: '', totalTeachers: 0 };
    this.isEdit = false;
  }
}
