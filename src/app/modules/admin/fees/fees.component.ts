import { Component } from '@angular/core';


interface Fee {
  id: number;
  studentName: string;
  class: string;
  amount: number;
  dueDate: string;
}
@Component({
  selector: 'app-fees',
  templateUrl: './fees.component.html',
  styleUrls: ['./fees.component.scss']
})
export class FeesComponent  {
  fees: Fee[] = [
    { id: 1, studentName: 'Rakib Mridha', class: '10', amount: 5000, dueDate: '2025-09-15' },
    { id: 2, studentName: 'John Doe', class: '9', amount: 4500, dueDate: '2025-09-20' }
  ];

  newFee: Fee = { id: 0, studentName: '', class: '', amount: 0, dueDate: '' };

  addFee() {
    if (this.newFee.studentName && this.newFee.class && this.newFee.amount && this.newFee.dueDate) {
      this.newFee.id = this.fees.length + 1;
      this.fees.push({ ...this.newFee });
      this.newFee = { id: 0, studentName: '', class: '', amount: 0, dueDate: '' };
    }
  }
}
