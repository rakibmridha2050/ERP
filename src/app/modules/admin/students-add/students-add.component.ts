import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { StudentShowService } from '../services/student-show.service';

@Component({
  selector: 'app-students-add',
  templateUrl: './students-add.component.html',
  styleUrls: ['./students-add.component.scss']
})
export class StudentsAddComponent {
  admissionForm: FormGroup;

  constructor(private fb: FormBuilder, private studentShowService: StudentShowService) {
    this.admissionForm = this.fb.group({
      firstName: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(30)]],
      lastName: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(30)]],
      gender: ['', Validators.required],
      dateOfBirth: ['', Validators.required],
      bloodGroup: ['', Validators.required],

      email: ['', [Validators.required, Validators.email]],
      phoneNumber: ['', [Validators.required, Validators.pattern(/^[0-9]{10,15}$/)]],  // 10–15 digit

      presentAddress: ['', [Validators.required, Validators.minLength(5)]],
      permanentAddress: ['', [Validators.required, Validators.minLength(5)]],

      classId: ['', Validators.required],
      sectionId: ['', Validators.required],
      rollNumber: ['', [Validators.required, Validators.pattern(/^[0-9]+$/)]], // only numbers

      fatherName: ['', [Validators.required, Validators.minLength(3)]],
      fatherPhone: ['', [Validators.required, Validators.pattern(/^[0-9]{10,15}$/)]],
      motherName: ['', [Validators.required, Validators.minLength(3)]],
      motherPhone: ['', [Validators.required, Validators.pattern(/^[0-9]{10,15}$/)]],

      admissionDate: ['', Validators.required],
      admissionFee: ['', [Validators.required, Validators.min(0)]],

      remarks: ['', Validators.maxLength(200)]
    });
  }

  onSubmit() {
    if (this.admissionForm.valid) {
      this.studentShowService.addStudent(this.admissionForm.value);
      console.log("Admission Data: ", this.admissionForm.value);
      alert('Student Added Successfully!');
      this.admissionForm.reset();




    } else {
      alert("⚠️ Please fill all required fields!");
    }
  }
}
