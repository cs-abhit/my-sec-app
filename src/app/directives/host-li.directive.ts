import { Directive, ElementRef, HostBinding, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHostLi]'
})
export class HostLiDirective {

  constructor(private ele : ElementRef , private redn : Renderer2) { }

  @HostListener('mouseenter') mouseHover(){
    this.redn.setStyle(this.ele.nativeElement , 'margin' , '30px 30px')
    this.redn.setStyle(this.ele.nativeElement , 'padding' , '5px 5px')
    this.redn.setStyle(this.ele.nativeElement , 'transition', '1s')
  }

  @HostListener('mouseleave') mouseOut(){
    this.redn.setStyle(this.ele.nativeElement , 'margin' , '0')
    this.redn.setStyle(this.ele.nativeElement , 'padding' , '0')
    this.redn.setStyle(this.ele.nativeElement , 'transition', '1s')
  }

  @HostBinding('style.backgroundColor') bgc : string = 'aqua'


}
