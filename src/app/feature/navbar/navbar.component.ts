import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import { heroCube, heroHome, heroUserPlus } from '@ng-icons/heroicons/outline';

@Component({
    selector: 'app-navbar',
    standalone: true,
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.scss'],
    imports: [RouterModule, CommonModule, NgIconComponent],
    viewProviders: [provideIcons({ heroHome, heroUserPlus, heroCube })],
})
export class NavbarComponent {
    navLinks = [
        { path: '/home', label: 'Home', icon: 'heroHome' },
        { path: '/add', label: 'Add Employee', icon: 'heroUserPlus' },
    ];
    dropdownVisible = false;

    toggleDropdown(): void {
        this.dropdownVisible = !this.dropdownVisible;
    }

    getBarClass(i: number): string[] {
        return ['bar', this.dropdownVisible ? `bar${i}` : ''];
    }
}
