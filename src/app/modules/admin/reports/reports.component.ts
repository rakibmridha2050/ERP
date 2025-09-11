import { Component, OnInit } from '@angular/core';

interface Report {
  id: number;
  type: string;
  description: string;
  date: string;
}
@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.scss']
})
export class ReportsComponent implements OnInit {
   activeTab: string = 'attendance';

  attendanceReports: Report[] = [];
  examReports: Report[] = [];
  financeReports: Report[] = [];

  ngOnInit(): void {
    // Dummy data (later connect with API/JSON Server)
    this.attendanceReports = [
      { id: 1, type: 'Attendance', description: 'Monthly Attendance Report - Class 6', date: '2025-09-01' },
      { id: 2, type: 'Attendance', description: 'Monthly Attendance Report - Class 7', date: '2025-09-01' }
    ];

    this.examReports = [
      { id: 1, type: 'Exam Result', description: 'Final Exam Results - Class 6', date: '2025-08-20' },
      { id: 2, type: 'Exam Result', description: 'Midterm Results - Class 7', date: '2025-07-15' }
    ];

    this.financeReports = [
      { id: 1, type: 'Finance', description: 'Fee Collection Summary - August', date: '2025-08-31' },
      { id: 2, type: 'Finance', description: 'Expense Report - August', date: '2025-08-30' }
    ];
  }

  setActiveTab(tab: string) {
    this.activeTab = tab;
  }

  downloadReport(report: Report) {
    alert(`Downloading ${report.type} - ${report.description}`);
  }

  viewReport(report: Report) {
    alert(`Viewing ${report.type} Report`);
  }
}
