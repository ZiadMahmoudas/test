import {  AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, booleanAttribute, Component, DoCheck, EventEmitter, Input, OnChanges, OnDestroy, OnInit, Output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit,OnDestroy,OnChanges,AfterContentInit,AfterViewInit,AfterContentChecked ,AfterViewChecked,DoCheck  {
  @Input({ alias: 't', }) title!: string;
  @Output("msg") msgEvent = new EventEmitter()

   appear() {
      this.msgEvent.emit(this.title)
  }
  constructor(){
    // [1] Not from lifeCycle Hooks
    // [2] implement first because constructor it is related to the Class
    // [3] use when create new Object
    console.log("constructor");
  }
  // [1] before it is displayed in the DOM. this is use only one
  // [2] that is important for api because when load component for re
  ngOnInit(){
    // console.log("OnInit");
    alert('555')
  }
  // [1] appear when destroy for element
  // [2] when create => use only one
  ngOnDestroy() {
   console.log("destroy");
  }
  // [1] run when find @input because find change and this change listen when data convert from parent to child
  // [2] implement second but he the first for lifeCycle Hooks
  ngOnChanges(changes: SimpleChanges) {
      console.log(`Changes`);
  }
  // [1] From Name: this function do check for all changes
  // [2] must use this function careful
  // [3] to find complex changes cant find with OnChanges
  ngDoCheck(){
   console.log("DoCheck");
  }
  // [1] to complete after onInit and reload content
  // [2] when create => use only one
  ngAfterViewInit() {
    console.log("AfterViewInit");
}
// [1] this first then afterViewInit
  ngAfterContentInit(){
console.log("AfterContentInit");
  }

  // [1] check after OnChange
  // [2] check on the view
  ngAfterViewChecked() {
      console.log("AfterViewChecked");
  }

  // [1] check after OnChange
  // [2] check on the content
  ngAfterContentChecked(){
  console.log("AfterContentChecked");
  }

}
