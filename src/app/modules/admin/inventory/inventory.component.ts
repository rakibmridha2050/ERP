import { Component } from '@angular/core';


interface InventoryItem {
  id: number;
  name: string;
  quantity: number;
  category: string;
}
@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.scss']
})
export class InventoryComponent {
  items: InventoryItem[] = [
    { id: 1, name: 'Notebook', quantity: 100, category: 'Stationery' },
    { id: 2, name: 'Marker Pen', quantity: 50, category: 'Stationery' },
    { id: 3, name: 'Projector', quantity: 5, category: 'Electronics' }
  ];

  newItem: InventoryItem = { id: 0, name: '', quantity: 0, category: '' };

  addItem() {
    if (this.newItem.name && this.newItem.quantity && this.newItem.category) {
      this.newItem.id = this.items.length + 1;
      this.items.push({ ...this.newItem });
      this.newItem = { id: 0, name: '', quantity: 0, category: '' };
    }
  }
}