import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-teachers',
  templateUrl: './teachers.component.html',
  styleUrls: ['./teachers.component.scss']
})
export class TeachersComponent {
teacherForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.teacherForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required, Validators.pattern('^[0-9]{10,15}$')]],
      subject: ['', Validators.required],
      gender: ['', Validators.required],
      dob: ['', Validators.required],
      qualification: ['', Validators.required],
      experience: ['', [Validators.required, Validators.min(0)]],
      joiningDate: ['', Validators.required],
      address: ['', [Validators.required, Validators.minLength(5)]],
    });
  }

  onSubmit() {
    if (this.teacherForm.valid) {
      console.log(this.teacherForm.value);
      alert('Teacher added successfully!');
    } else {
      this.teacherForm.markAllAsTouched();
    }
  }
}
