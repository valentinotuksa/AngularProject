import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { FormComponent } from '../../component/form/form.component';
import { SendEmployeeService } from '../../service/send-employee.service';
import { Subscription } from 'rxjs';
import { FormField } from '../../interfaces/form-field.interface';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-add',
    standalone: true,
    imports: [CommonModule, FormsModule, FormComponent],
    templateUrl: './add-page.component.html',
    styleUrls: ['./add-page.component.scss'],
    providers: [SendEmployeeService],
})
export class AddPageComponent {
    private subscription: Subscription = new Subscription();
    field: FormField[] = [
        { name: 'First Name', type: 'text', required: true },
        { name: 'Last Name', type: 'text', required: true },
        { name: 'Date of Birth', type: 'date', required: true },
        { name: 'Position', type: 'text', required: true },
    ];
    message: string = '';
    messageClass: string = '';

    constructor(private sendEmployeeService: SendEmployeeService) {}

    onFormSubmitted(form: NgForm): void {
        if (!this.validateForm(form.value)) {
            this.messageClass = 'fail';
            this.message = 'Form data is invalid';
            return;
        }

        this.subscription = this.sendEmployeeService
            .sendData(form.value)
            .subscribe({
                next: (response) => {
                    console.log('Data sent successfully:', response);
                    this.messageClass = 'success';
                    this.message = 'Form submitted successfully.';
                    form.resetForm();
                },
                error: (error) => {
                    console.error('Error sending data:', error);
                },
            });
    }

    ngOnDestroy(): void {
        if (this.subscription) this.subscription.unsubscribe();
    }

    private validateForm(formData: any): boolean {
        return this.field.every((field) => {
            const value = formData[field.name];

            if (field.type === 'date' && isNaN(Date.parse(value))) {
                return false;
            }

            if (!isNaN(Number(value))) {
                return false;
            }

            return true;
        });
    }
}
