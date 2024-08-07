import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaginationComponent } from '../../component/pagination/pagination.component';
import { TableSearchComponent } from '../../component/table-search/table-search.component';
import { EmployeeService } from '../../service/employee.service';
import { Subscription } from 'rxjs';
import { HttpClientModule } from '@angular/common/http';
import { SplitCamelCasePipe } from '../../pipe/split-camel-case.pipe';
import { CapitalizeFirstPipe } from '../../pipe/capitalize-first.pipe';

interface Employee {
    [key: string]: any;
    id: number;
    firstName: string;
    lastName: string;
    dateOfBirth: string;
    jobTitle: string;
}

@Component({
    selector: 'app-employee-table',
    standalone: true,
    imports: [
        CommonModule,
        HttpClientModule,
        PaginationComponent,
        TableSearchComponent,
        SplitCamelCasePipe,
        CapitalizeFirstPipe,
    ],
    providers: [EmployeeService],
    templateUrl: './employee-table.component.html',
    styleUrls: ['./employee-table.component.scss'],
    encapsulation: ViewEncapsulation.None,
})
export class EmployeeTableComponent implements OnInit {
    private subscription: Subscription = new Subscription();
    private employeesData: Employee[] = [];
    private employeesFiltered: Employee[] = [];
    private searchValue: string = '';
    private selectedJobTitles: string[] = [];
    itemsPerPage: number = 8;
    currentPage: number = 1;
    numberOfItems: number = 0;
    sortAscending: boolean = true;
    sortedColumn: string = 'id';

    constructor(private employeeService: EmployeeService) {}

    ngOnInit(): void {
        this.subscription = this.employeeService.getEmployees().subscribe({
            next: (response) => {
                this.employeesData = response.data.map((employee: Employee) => ({
                    ...employee,
                    dateOfBirth: new Date(employee.dateOfBirth).toLocaleDateString(),
                }));

                this.employeesFiltered = this.employeesData;
                this.numberOfItems = this.employeesData.length;
            },
            error: (error) => {
                console.error('Error fetching employees', error);
            },
        });
    }

    ngOnDestroy(): void {
        if (this.subscription) {
            this.subscription.unsubscribe();
        }
    }

    getDataColumns(): string[] {
        if (this.employeesData.length === 0) {
            return [];
        }
        return Object.keys(this.employeesData[0]);
    }

    getAllJobTitles(): Set<string> {
        return new Set(this.employeesData.map((employee) => employee.jobTitle).sort());
    }

    onClickSort(column: string): void {
        if (this.sortedColumn === column) {
            this.sortAscending = !this.sortAscending;
        } else {
            this.sortedColumn = column;
            this.sortAscending = true;
        }
        this.filterAndSortEmployees();
    }

    onMultiselectOptionsSelected(selectedJobTitles: string[]): void {
        this.selectedJobTitles = selectedJobTitles;
        this.filterAndSortEmployees();
    }

    onSearch(value: string): void {
        this.searchValue = value;
        this.filterAndSortEmployees();
    }

    private filterAndSortEmployees(): void {
        this.employeesFiltered = this.employeesData.filter((employee) => {
            const { jobTitle, firstName, lastName } = employee;

            const matchesJobTitle = this.selectedJobTitles.length === 0 || this.selectedJobTitles.includes(jobTitle);

            const fullName = [firstName.toLowerCase(), lastName.toLowerCase()];
            const searchWords = this.searchValue.toLowerCase().split(' ');
            const matchesSearch = searchWords.every((searchWord) =>
                fullName.some((namePart) => namePart.includes(searchWord))
            );

            return matchesJobTitle && matchesSearch;
        });

        this.employeesFiltered.sort((a, b) => {
            const [first, second] =
                this.sortedColumn === 'dateOfBirth'
                    ? [new Date(a[this.sortedColumn]), new Date(b[this.sortedColumn])]
                    : [a[this.sortedColumn], b[this.sortedColumn]];

            if (first < second) {
                return this.sortAscending ? -1 : 1;
            } else if (first > second) {
                return this.sortAscending ? 1 : -1;
            } else {
                return 0;
            }
        });

        this.numberOfItems = this.employeesFiltered.length;
        this.currentPage = 1;
    }

    getHighlightedText(value: any): string {
        if (typeof value !== 'string') return value;

        const words = this.searchValue.split(' ').filter((word) => word !== '');
        if (words.length === 0) return value;

        const regex = new RegExp(`(${words.join('|')})`, 'gi');
        return value.replace(regex, '<span class="highlight">$1</span>');
    }

    get employeesOnCurrentPage(): Employee[] {
        const startIndex = (this.currentPage - 1) * this.itemsPerPage;
        return this.employeesFiltered.slice(startIndex, startIndex + this.itemsPerPage);
    }

    onChangedPage(page: number): void {
        this.currentPage = page;
    }
}
