import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'calculator',
    templateUrl: 'calculator.component.html',
    styleUrls: ['calculator.component.css']
})
export class CalculatorComponent implements OnInit {
    
    display: string = 'HELLO';

    input(){}

    eval(){}
    
    constructor() { }

    ngOnInit() { }
}