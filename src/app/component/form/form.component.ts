import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { FormField } from '../../interfaces/form-field.interface';

@Component({
    selector: 'app-form',
    standalone: true,
    imports: [CommonModule, FormsModule, FormComponent],
    templateUrl: './form.component.html',
    styleUrl: './form.component.scss',
})
export class FormComponent {
    @Input() formFields: FormField[] = [];
    @Output() formSubmitted: EventEmitter<NgForm> = new EventEmitter<NgForm>();

    onSubmit(form: NgForm) {
        if (form.valid) {
            this.formSubmitted.emit(form);
        }
    }
}
