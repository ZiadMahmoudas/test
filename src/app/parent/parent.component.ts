import { Component, OnInit } from '@angular/core';
import { tick } from '@angular/core/testing';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent implements OnInit{

  ngOnInit(): void {
    setTimeout(()=>{
      return this.parentTitle = "omar"
      },3000)
  }
  parentTitle = "Parent"
  isVisible:boolean=true
  appearToConsole(e:string){
    this.isVisible = !this.isVisible;
    console.log(`${e}`);
  }
}
