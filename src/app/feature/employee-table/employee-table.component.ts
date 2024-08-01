import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
// import { EmployeeService } from '../../service/employee.service';

@Component({
  selector: 'app-employee-table',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  templateUrl: './employee-table.component.html',
  styleUrls: ['./employee-table.component.scss'],
})
export class EmployeeTableComponent implements OnInit {
  employees: any[] = [
    {
      id: 1,
      firstName: 'Josip',
      lastName: 'Boban',
      dateOfBirth: '1950-03-19T23:25:38',
      jobTitle: 'Konzultant',
    },
    {
      id: 2,
      firstName: 'Noa',
      lastName: 'Božić',
      dateOfBirth: '1996-05-12T05:43:05',
      jobTitle: 'Konzultant',
    },
    {
      id: 3,
      firstName: 'Luka',
      lastName: 'Horvat',
      dateOfBirth: '1990-08-01T19:48:44',
      jobTitle: 'Manager',
    },
    {
      id: 4,
      firstName: 'Lana',
      lastName: 'Kovačić',
      dateOfBirth: '1958-03-11T09:37:07',
      jobTitle: 'Dizajner',
    },
    {
      id: 5,
      firstName: 'Dorotea',
      lastName: 'Babić',
      dateOfBirth: '1986-09-03T17:27:56',
      jobTitle: 'Programer',
    },
    {
      id: 6,
      firstName: 'Noa',
      lastName: 'Horvat',
      dateOfBirth: '1965-05-27T11:22:28',
      jobTitle: 'Konzultant',
    },
    {
      id: 7,
      firstName: 'Matija',
      lastName: 'Kovačević',
      dateOfBirth: '1998-10-09T02:22:49',
      jobTitle: 'Manager',
    },
    {
      id: 8,
      firstName: 'Ivan',
      lastName: 'Horvat',
      dateOfBirth: '1985-06-18T08:21:41',
      jobTitle: 'Inženjer',
    },
    {
      id: 9,
      firstName: 'Teo',
      lastName: 'Horvat',
      dateOfBirth: '1955-01-15T10:32:23',
      jobTitle: 'Dizajner',
    },
    {
      id: 10,
      firstName: 'Filip',
      lastName: 'Horvat',
      dateOfBirth: '1968-03-26T01:42:05',
      jobTitle: 'Konzultant',
    },
    {
      id: 11,
      firstName: 'Ana',
      lastName: 'Marić',
      dateOfBirth: '1992-08-12T01:39:39',
      jobTitle: 'Programer',
    },
    {
      id: 12,
      firstName: 'Teo',
      lastName: 'Boban',
      dateOfBirth: '1999-05-26T23:46:30',
      jobTitle: 'Konzultant',
    },
    {
      id: 13,
      firstName: 'Josip',
      lastName: 'Kovačević',
      dateOfBirth: '1970-12-26T08:01:02',
      jobTitle: 'Konzultant',
    },
    {
      id: 14,
      firstName: 'Matija',
      lastName: 'Ivković',
      dateOfBirth: '1992-01-02T01:17:40',
      jobTitle: 'Konzultant',
    },
    {
      id: 15,
      firstName: 'Dorotea',
      lastName: 'Ivković',
      dateOfBirth: '1969-08-13T03:32:11',
      jobTitle: 'Manager',
    },
    {
      id: 16,
      firstName: 'Petar',
      lastName: 'Boban',
      dateOfBirth: '1997-08-31T00:54:25',
      jobTitle: 'Dizajner',
    },
    {
      id: 17,
      firstName: 'Hana',
      lastName: 'Boban',
      dateOfBirth: '1990-09-11T08:24:26',
      jobTitle: 'Inženjer',
    },
    {
      id: 18,
      firstName: 'Mia',
      lastName: 'Boban',
      dateOfBirth: '1998-04-10T07:15:50',
      jobTitle: 'Programer',
    },
    {
      id: 19,
      firstName: 'Dorotea',
      lastName: 'Kovačević',
      dateOfBirth: '1985-07-09T13:19:47',
      jobTitle: 'Dizajner',
    },
    {
      id: 20,
      firstName: 'Josip',
      lastName: 'Ivković',
      dateOfBirth: '1950-08-14T06:39:33',
      jobTitle: 'Programer',
    },
  ];

  // constructor(private employeeService: EmployeeService) {}

  ngOnInit(): void {
    // this.employeeService.getEmployees().subscribe((data) => {
    //   this.employees = data;
    // });
  }
}
