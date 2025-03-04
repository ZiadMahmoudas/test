import { Component } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent {
  parentTitle = "Parent"
  appearToConsole(){
    console.log("Ziko||Figo");

  }
}
