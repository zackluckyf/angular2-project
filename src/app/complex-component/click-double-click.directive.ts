import {Directive, ElementRef, Input, Output, EventEmitter, HostListener} from '@angular/core';
 
@Directive({
    selector: '[detectClick]'
})

export class DetectClickDirective {
  clickCount: number = 0;
  clickTimeout: any = null;
  readonly: boolean;

  @Input('detectClick') public detectClick:any;
  @Output() public singleClick = new EventEmitter();
  @Output() public doubleClick = new EventEmitter();

  constructor(private _elementRef : ElementRef) {
  }

  @HostListener('click', ['$event.target'])
  public handleClick(targetElement: any) {
    this.clickCount++;

    // Reset on every click
    if (this.clickTimeout !== null) {
      clearTimeout(this.clickTimeout);
    }

    // Detect type of click in x mili seconds
    this.clickTimeout = setTimeout(detectClickType.bind(this), 300);

    function detectClickType () {
      if (this.clickCount >= 2){
        // detected a double click
        console.log('called double click');
        this.doubleClick.emit();
      } 
      else {
        // detected single click
        console.log('called single click');
        this.singleClick.emit();
      }

      // reset after each detect
      this.clickCount = 0;
    }
  }
}