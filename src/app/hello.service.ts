import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class HelloService {

    private state = new BehaviorSubject<string>(null);

    public setValue(value: string) {
        this.state.next(value);
    }

    public getValue(): Observable<string> {
        return this.state.asObservable();
    }
}
