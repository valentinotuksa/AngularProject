import { Component, EventEmitter, Input, OnChanges, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-pagination',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './pagination.component.html',
    styleUrl: './pagination.component.scss',
})
export class PaginationComponent implements OnChanges {
    @Input() numberOfItems: number = 0;
    @Input() itemsPerPage: number = 0;
    @Input() currentPage: number = 0;
    @Output() changedPage: EventEmitter<number> = new EventEmitter<number>();
    pages: number[] = [];

    ngOnChanges() {
        this.updatePages();
    }

    pageClick(page: number) {
        this.changedPage.emit(page);
    }

    private updatePages() {
        let numberOfPages = Math.max(Math.ceil(this.numberOfItems / this.itemsPerPage), 1);

        this.pages = Array.from({ length: numberOfPages }, (_, index) => index + 1);
    }
}
