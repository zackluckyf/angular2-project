import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
    selector: 'tabs', 
    templateUrl: './tabs.component.html'
})
export class TabsComponent {
    constructor(private router: Router, private route: ActivatedRoute,) { }
    
    tab1(){
        this.router.navigate(['tab1'], {relativeTo: this.route})
    }
    tab2(){
        this.router.navigate(['tab2'], {relativeTo: this.route})
    }
}