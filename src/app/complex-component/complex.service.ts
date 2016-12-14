import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class SharedService {
  constructor() {
  }

  // Observable string sources
  private _items = new Subject<any[]>();

  items$ = this._items.asObservable();

  itemsList = [];

  item1 = {
    name: 'open developer tools',
    id: 1
  };

  item2 = {
    name: 'try clicking once',
    id: 2    
  };

  item3 = {
    name: 'try double clicking',
    id: 3
  };

  item4 = {
    name: 'add some of your own',
    id: 4
  };

  getItems(){
    setTimeout(() => {
      this.itemsList.push(this.item1)
      this._items.next(this.itemsList);
      setTimeout(() => {
      this.itemsList.push(this.item2)
      this._items.next(this.itemsList);
        setTimeout(() => {
        this.itemsList.push(this.item3)
        this._items.next(this.itemsList);
          setTimeout(() => {
          this.itemsList.push(this.item4)
          this._items.next(this.itemsList);
          }, 1000);
        }, 1000);
      }, 1000);
    }, 1000);
  }
  
  addItem(item: string){
    let length = this.itemsList.length + 1;
    let object = {
      name: item,
      id: length
    }
    this.itemsList.push(object)
    this._items.next(this.itemsList);
  }
}