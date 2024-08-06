import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MultiselectComponent } from '../multiselect/multiselect.component';
import { FormsModule } from '@angular/forms';
import { SearchComponent } from '../search/search.component';

@Component({
    selector: 'app-table-search',
    standalone: true,
    imports: [CommonModule, FormsModule, MultiselectComponent, SearchComponent],
    templateUrl: './table-search.component.html',
    styleUrl: './table-search.component.scss',
})
export class TableSearchComponent {
    @Input() options: Set<string> = new Set<string>();
    @Output() search: EventEmitter<string> = new EventEmitter<string>();
    @Output() multiselectOptionsSelected: EventEmitter<string[]> = new EventEmitter<string[]>();

    searchValue: string = '';

    onSearchUpdated(value: string) {
        this.search.emit(value);
    }

    onSelectedOptions($event: string[]) {
        this.multiselectOptionsSelected.emit($event);
    }
}
