import { Directive, ElementRef, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appStyle]'
})
export class StyleDirective {

  constructor(private element : ElementRef ,private renderer : Renderer2) { }

  @Input('appStyle') set setStyle(style: object){
    let entry = Object.entries(style)

    for(let e of entry){
      this.renderer.setStyle(this.element.nativeElement , e[0] , e[1])
    }
  }

}
