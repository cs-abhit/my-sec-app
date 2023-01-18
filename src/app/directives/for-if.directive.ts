import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appForIf]'
})
export class ForIfDirective {
  // what to do add or remove
  // from where to do add or remove
  constructor(private template : TemplateRef<any> , private viewcon : ViewContainerRef) { }

  @Input('appForIf') set displayView(condition : boolean){
    if(condition){
      this.viewcon.createEmbeddedView(this.template)
    }
    else{
      this.viewcon.clear();
    }
  }
}
