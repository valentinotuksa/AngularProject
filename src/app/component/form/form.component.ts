import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
    selector: 'app-form',
    standalone: true,
    imports: [CommonModule, FormsModule, FormComponent],
    templateUrl: './form.component.html',
    styleUrl: './form.component.scss',
})
export class FormComponent implements OnInit {
    @Input() formFields: any[] = [];
    @Output() formSubmitted: EventEmitter<NgForm> = new EventEmitter<NgForm>();

    ngOnInit(): void {
        // console.log('Form Fields:', this.formFields);
    }

    onSubmit(form: NgForm) {
        if (form.valid) {
            // const formData = form.value;
            // form.resetForm();
            // console.log('Form Data:', formData);

            this.formSubmitted.emit(form);
        }
    }
}
