import { CommonModule } from '@angular/common';
import { Component, EventEmitter, HostListener, Input, OnInit, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SearchComponent } from '../search/search.component';
import { ClickOutsideDirective } from '../../directive/click-outside.directive';

@Component({
    selector: 'app-multiselect',
    standalone: true,
    imports: [CommonModule, FormsModule, SearchComponent, ClickOutsideDirective],
    templateUrl: './multiselect.component.html',
    styleUrls: ['./multiselect.component.scss'],
})
export class MultiselectComponent implements OnInit {
    @Input() options: Set<string> = new Set<string>();
    @Output() selectedOptionsEmitter: EventEmitter<string[]> = new EventEmitter<string[]>();

    selectedOptions: Set<string> = new Set<string>();
    filteredOptions: Set<string> = new Set<string>();
    searchTerm: string = '';
    dropdownVisible: boolean = false;

    ngOnInit(): void {
        this.filteredOptions = new Set(this.options);
    }

    openDropdown(): void {
        if (this.filteredOptions.size < 1) {
            return;
        }
        this.dropdownVisible = true;
    }

    closeDropdown(): void {
        this.dropdownVisible = false;
    }

    onInput(value: string): void {
        this.searchTerm = value;
        this.filterOptions();
    }

    private filterOptions(): void {
        let lowerCaseSearchTerm = this.searchTerm.toLowerCase();
        this.filteredOptions = new Set();

        this.options.forEach((option) => {
            if (option.toLowerCase().includes(lowerCaseSearchTerm) && !this.selectedOptions.has(option)) {
                this.filteredOptions.add(option);
            }
        });
    }

    toggleSelection(option: string) {
        if (this.selectedOptions.has(option)) {
            this.selectedOptions.delete(option);
        } else {
            this.selectedOptions.add(option);
            this.dropdownVisible = false;
        }
        this.searchTerm = '';
        this.filterOptions();
        this.selectedOptionsEmitter.emit(Array.from(this.selectedOptions));
    }
}
