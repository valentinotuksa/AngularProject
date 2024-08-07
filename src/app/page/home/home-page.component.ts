import { Component } from '@angular/core';
import { EmployeeTableComponent } from '../../feature/employee-table/employee-table.component';

@Component({
    selector: 'app-home',
    standalone: true,
    imports: [EmployeeTableComponent],
    templateUrl: './home-page.component.html',
    styleUrl: './home-page.component.scss',
})
export class HomePageComponent {}
