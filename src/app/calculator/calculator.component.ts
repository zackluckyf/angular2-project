import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'calculator',
    templateUrl: 'calculator.component.html',
    styleUrls: ['calculator.component.css']
})
export class CalculatorComponent implements OnInit {
    
    display: string = 'HELLO';

    username: string = '';
    name: string = '';

    constructor() { }

    ngOnInit() { }

    input(){}
    
    eval(){}

    submit(username: string) { 
        console.log("setting username = ", username);
        this.name = username;
    }
}