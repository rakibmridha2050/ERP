import { Component } from '@angular/core';

@Component({
  selector: 'app-setting',
  templateUrl: './setting.component.html',
  styleUrls: ['./setting.component.scss']
})
export class SettingComponent {
  schoolName: string = 'Greenfield High School';
  address: string = '123 School Lane, Dhaka';
  contactEmail: string = 'info@greenfield.edu';
  contactPhone: string = '0123456789';

  enableNotifications: boolean = true;
  darkMode: boolean = false;

  saveSettings() {
    console.log('Settings saved:', {
      schoolName: this.schoolName,
      address: this.address,
      contactEmail: this.contactEmail,
      contactPhone: this.contactPhone,
      enableNotifications: this.enableNotifications,
      darkMode: this.darkMode
    });
    alert('Settings saved successfully!');
  }
}
