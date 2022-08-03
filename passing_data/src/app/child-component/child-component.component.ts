import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';


@Component({
  selector: 'app-child-component',
  templateUrl: './child-component.component.html',
  styleUrls: ['./child-component.component.css']
})
export class ChildComponentComponent implements OnInit {
@Input() item=""
@Output() newEvent =new EventEmitter()
addNewEvent(data:string){
this.newEvent.emit(data)
}
  constructor() { }

  ngOnInit(): void {
  }

}
