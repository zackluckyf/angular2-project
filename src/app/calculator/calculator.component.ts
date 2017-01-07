import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'calculator',
    templateUrl: 'calculator.component.html',
    styleUrls: ['calculator.component.css']
})
export class CalculatorComponent implements OnInit {
    
    display: string = '';
    username: string = '';
    name: string = '';

    constructor() { }

    ngOnInit() { }

    submit(username: string) { 
        console.log("setting username = ", username);
        this.name = username;
    }

    input(char:string):void {
        this.display += char;
    }

    eval():any {
        this.display = eval(this.display);
    }
    
    clear():void {
        this.display = '';
    }
}