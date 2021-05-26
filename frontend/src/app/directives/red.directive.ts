import { ElementRef } from '@angular/core';
import { Directive } from '@angular/core';

@Directive({
  selector: '[appRed]'
})
export class RedDirective {

  constructor(private el: ElementRef) { 
    el.nativeElement.style.color = '#e35e6b'
  }

}
