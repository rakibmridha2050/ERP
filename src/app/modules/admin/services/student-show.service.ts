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
    this.studentsSubject.next(this.students);
  }

  getStudents(): Observable<Student[]> {
    return this.studentsSubject.asObservable();
  }
}
