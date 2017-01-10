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
        ['7','8','9','/', '1/x'],
        ['4','5','6','*', 'rnd'],
        ['1','2','3','-', 'exp'],
        ['0','.','=','+', 'sqrt'],
        ['(',')','C',',', 'Back']
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
        this.display = eval(this.display).toString();
    }
    
    clear():void {
        this.display = '';
    }
    
    reciprocal():void {
        let dsp = this.display;
        if (dsp.search(/[^0-9.]/) === -1) this.display = (1/Number(dsp)).toString();
    }
    
    round():void {
        let dsp = this.display;
        if (dsp.search(/[^0-9.]/) === -1) this.display = Math.round(Number(dsp)).toString();
    }
    
    exponent():void {
        let dsp = this.display;
        let base = /\d+$/.exec(dsp);
        dsp = dsp.slice(0, base.index);
        this.display = dsp + 'Math.pow(' + base[0] + ',';
    }
    
    sqrt():void {
        let dsp = this.display;
        let base = /\d+$/.exec(dsp);
        dsp = dsp.slice(0, base.index);
        // Will automatically perform the operation if the number is the only thing in display
        if (!dsp) this.display = Math.sqrt(Number(base[0])).toString();
        else this.display = dsp + 'Math.sqrt(' + base[0] + ')';
    }
    
    backspace():void {
        this.display = this.display.slice(0, this.display.length - 1);
    }
    
    determineFunction(key) {
        if (key === '=') return this.eval();
        if (key === 'C') return this.clear();
        if (key === '1/x') return this.reciprocal();
        if (key === 'rnd') return this.round();
        if (key === 'exp') return this.exponent();
        if (key === 'sqrt') return this.sqrt();
        if (key === 'Back') return this.backspace();
        else return this.input(key);
    }
}