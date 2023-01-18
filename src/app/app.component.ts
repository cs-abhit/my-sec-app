import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import { ChildComponent } from './child/child.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-second-app';

  enterName = "";
  parentData = "";
  value: string= "";
  condition = false;
  active : boolean = false;

  display :boolean = true;

  // transferData(): void{
  //   this.parentData = this.enterName;
  // }

  sendData(value: string){
    this.value = value;
  }

  @ViewChild('dobhtml') dateOfBirth!: ElementRef;
  @ViewChild('agehtml') agecurent!: ElementRef;
  @ViewChild(ChildComponent , {static: true}) childcomp!: ChildComponent; 

  countAge(){
    let biryear = new Date(this.dateOfBirth.nativeElement.value).getFullYear();
    let curYear = new Date().getFullYear();

    let age = curYear - biryear;
    this.agecurent.nativeElement.value = age
  }
 }
