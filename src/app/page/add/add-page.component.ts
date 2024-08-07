import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
    selector: 'app-add',
    standalone: true,
    imports: [FormsModule],
    templateUrl: './add-page.component.html',
    styleUrls: ['./add-page.component.scss'],
})
export class AddPageComponent {
    onSubmit(form: NgForm) {
        if (form.valid) {
            const formData = form.value;
            form.resetForm();
            console.log('Form Data:', formData);
        }
    }
}
