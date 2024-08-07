import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import { heroHome } from '@ng-icons/heroicons/outline';

@Component({
    selector: 'app-navbar',
    standalone: true,
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.scss'],
    imports: [RouterModule, CommonModule, NgIconComponent],
    viewProviders: [provideIcons({ heroHome })],
})
export class NavbarComponent {
    dropdownVisible = false;

    toggleDropdown(): void {
        this.dropdownVisible = !this.dropdownVisible;
    }

    getBarClass(i: number): string[] {
        return ['bar', this.dropdownVisible ? `bar${i}` : ''];
    }
}
