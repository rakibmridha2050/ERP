import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

export interface Student {
  firstName: string;
  lastName: string;
  gender: string;
  dateOfBirth: string;
  bloodGroup: string;
  email: string;
  phoneNumber: string;
  presentAddress: string;
  permanentAddress: string;
  classId: string;
  sectionId: string;
  rollNumber: string;
  fatherName: string;
  fatherPhone: string;
  motherName: string;
  motherPhone: string;
  admissionDate: string;
  admissionFee: number;
  remarks: string;
}
@Injectable({
  providedIn: 'root'
})
export class StudentShowService {
  private students: Student[] = [];
  private studentsSubject = new BehaviorSubject<Student[]>(this.students);

  constructor() { }

  addStudent(student: Student) {
  this.students.push(student);

  // Notify subscribers
  this.studentsSubject.next(this.students);

  // Save to localStorage
  localStorage.setItem("stu", JSON.stringify(this.students));
}

getStudents(): Observable<Student[]> {
  const storedStudents = localStorage.getItem("stu");
  if (storedStudents) {
    this.students = JSON.parse(storedStudents);

    // Emit the loaded students so subscribers can get them
    this.studentsSubject.next(this.students);
  }

  return this.studentsSubject.asObservable();
}

}
