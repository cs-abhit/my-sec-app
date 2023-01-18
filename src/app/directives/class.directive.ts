import { Directive, ElementRef, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appClass]'
})
export class ClassDirective {

  constructor(private elemnet : ElementRef, private renderer : Renderer2) {

   }
   @Input() set display (value : object){
    let entries = Object.entries(value)
    // for(let e of entries){
    //   if(e[1]){
    //     this.renderer.addClass(this.elemnet.nativeElement , e[0 ])
    //   }
    // }
    for(let [className, condition] of entries){
      if( condition){
        this.renderer.addClass(this.elemnet.nativeElement , className)
      }
    }
   }
}
