import { Component } from '@angular/core';

@Component({
    selector: 'example', // this is the html selector you use
    templateUrl: './example.component.html', // we can use relative pathing since we use webpack
    styleUrls: ['./example.component.css'] // same thing here
})
export class ExampleComponent {
    constructor() { }
    
    double = (x: number = 4) => {
        return x*2;
    }
}