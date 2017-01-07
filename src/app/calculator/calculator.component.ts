import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'calculator',
    templateUrl: 'calculator.component.html',
    styleUrls: ['calculator.component.css']
})
export class CalculatorComponent implements OnInit {
    
    display: string = '';

    input(char:string):void {
        this.display += char;
    }

    eval():any {
        this.display = eval(this.display);
    }
    
    clear():void {
        this.display = '';
    }
    
    constructor() { }

    ngOnInit() { }
}