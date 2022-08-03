import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'passing_data';
  message="Hello from perent component"
  receivedMessage:string=''
  receiveMessage(childMessage:string){
this.receivedMessage=childMessage
console.log(childMessage)

  }
}
