import { Directive, HostListener, HostBinding, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[highlight]'
})
export class HighlightDirective {  
  @HostListener('mouseenter') mouseover() {
    this.backgroundColor = this.highlightColor;
    //this.renderer.setElementStyle(this.elementRef.nativeElement,'background-color','red'); this way also work, but the first is cleaner
  };

  @HostListener('mouseleave') mouseleave() {
    this.backgroundColor = this.defaultColor;
  };

  @HostBinding('style.backgroundColor') get setColor() {
    return this.backgroundColor;
  };
  @Input() defaultColor = 'white';
  @Input('highlight') highlightColor = 'green';
  
  private backgroundColor: string;
  constructor() {
    //this.elementRef.nativeElement.style.backgroundColor = 'green';
    
   }

   ngOnInit() {
     this.backgroundColor = this.defaultColor;
   }
    
}
