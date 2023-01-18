import { Component, Input ,Output , EventEmitter, ContentChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent {

  // @Input()
  // parentData: string = "";

  @Output() public sendData = new EventEmitter<string>();

  ngOnInit(){
    this.sendData.emit('child data')
  }

  sayHello(){
    console.log('my name is abhit')
  }

  ngAfterContentInit(){
    console.log(this.paraele.nativeElement.textContent)
  }
  @ContentChild('para') paraele! : ElementRef
}
