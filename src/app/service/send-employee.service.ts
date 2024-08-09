import { Injectable } from '@angular/core';
import { error } from 'console';
import { Observable, of, throwError } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class SendEmployeeService {
    sendData(data: any): Observable<any> {
        return of(data);
    }
}
