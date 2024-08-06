import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'app-search',
    standalone: true,
    imports: [FormsModule],
    templateUrl: './search.component.html',
    styleUrl: './search.component.scss',
})
export class SearchComponent {
    @Input() placeholder: string = 'Search...';
    @Input() searchValue: string = '';
    @Output() searchValueChange: EventEmitter<string> = new EventEmitter<string>();
    @Output() focus: EventEmitter<void> = new EventEmitter<void>();
    @Output() blur: EventEmitter<void> = new EventEmitter<void>();

    onFocus() {
        this.focus.emit();
    }

    onBlur() {
        this.blur.emit();
    }

    onInput() {
        this.searchValueChange.emit(this.searchValue);
    }
}
