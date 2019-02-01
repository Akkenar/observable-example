import { Component, OnInit } from '@angular/core';
import { HelloService } from './hello.service';
import { Observable } from 'rxjs';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {

    public value: Observable<string>;

    constructor(private helloService: HelloService) {
    }

    ngOnInit(): void {
        this.value = this.helloService.getValue();
    }

    setValue($event: any) {
        this.helloService.setValue($event);
    }

}
