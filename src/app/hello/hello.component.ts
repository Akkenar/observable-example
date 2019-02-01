import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { HelloService } from '../hello.service';

@Component({
    selector: 'app-hello',
    templateUrl: './hello.component.html',
})
export class HelloComponent implements OnInit {

    public simpleObservable: Observable<string>;

    constructor(private helloService: HelloService) {
    }

    ngOnInit() {
        this.simpleObservable = this.helloService.getValue();
    }

}
