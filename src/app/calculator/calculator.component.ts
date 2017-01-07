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
    calc_keys: Array<string[]> = [
        ['7','8','9','/'],
        ['4','5','6','*'],
        ['1','2','3','-'],
        ['0','.','=','+'],
        ['(',')','C','^']
    ];

    constructor() { }

    ngOnInit() { }

    submit(username: string) { 
        console.log("setting username = ", username);
        this.name = username;
    }

    input(char:string):void {
        this.display += char;
    }

    eval():void {
        this.display = eval(this.display);
    }
    
    clear():void {
        this.display = '';
    }
    
    determineFunction(key) {
        if (key === '=') return this.eval();
        if (key === 'C') return this.clear();
        else return this.input(key);
    }
}