import { Directive, ElementRef, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appRender]'
})
export class RenderDirective implements OnInit{

  constructor(private element : ElementRef , private render : Renderer2) { }
  
  ngOnInit() {
    this.render.setStyle(this.element.nativeElement, 'color' , 'green')
    this.render.addClass(this.element.nativeElement ,'container')
    this.render.setAttribute(this.element.nativeElement , 'title' , 'i am title')
  }

}
