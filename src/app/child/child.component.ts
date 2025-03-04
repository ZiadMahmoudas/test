import {  Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent {
  @Input({ alias: 't' }) title!: string;
  @Output("msg") msgEvent = new EventEmitter()
   appear() {
      this.msgEvent.emit(this.title)
  }
}
