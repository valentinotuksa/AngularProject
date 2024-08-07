import { Component } from '@angular/core';
import { EmployeeTableComponent } from '../../feature/employee-table/employee-table.component';

@Component({
    selector: 'app-home',
    standalone: true,
    imports: [EmployeeTableComponent],
    templateUrl: './home.component.html',
    styleUrl: './home.component.scss',
})
export class HomeComponent {}
