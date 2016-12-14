import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Subscription }   from 'rxjs/Subscription';
import { FormGroup }   from '@angular/forms';

import { SharedService } from './complex.service';

@Component({
    selector: 'group-selector',
    templateUrl: './complex.component.html',
    styleUrls: ['./complex.component.css']
})

export class GroupSelector implements OnInit {
    items: any[];
    text: string = '';

    private _sub:Subscription;

    constructor(
        private _sharedService: SharedService) { }

    ngOnInit() {
        this._sharedService.items$.subscribe(
            (data: any[]) => {
                this.items = data;
            });
        this._sharedService.getItems();
    }

    singleClick(){}

    doubleClick(){}

    addItem(item: string){
        this._sharedService.addItem(item);
    }
}