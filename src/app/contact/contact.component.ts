import { Component,ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {

  contactTitle:string= "Contact"
  isVisible:boolean=true
  returnForappear(e:string){
    this.isVisible = !this.isVisible;
    console.log(`${e}`);
  }
}
