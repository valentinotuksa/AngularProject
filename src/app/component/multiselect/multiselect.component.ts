import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
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
export class MultiselectComponent implements OnChanges {
    @Input() options: Set<string> = new Set<string>();
    @Output() selectedOptionsEmitter: EventEmitter<string[]> = new EventEmitter<string[]>();

    selectedOptions: Set<string> = new Set<string>();
    filteredOptions: Set<string> = new Set<string>();
    searchTerm: string = '';
    dropdownVisible: boolean = false;
    private initialized: boolean = false;

    ngOnChanges({ options }: SimpleChanges): void {
        if (options && this.filteredOptions.size < 1 && this.options.size > 1 && !this.initialized) {
            this.options = this.filteredOptions = options.currentValue;
            this.initialized = true;
        }
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
