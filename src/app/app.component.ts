import { Component } from '@angular/core';

//metadados da classe - decorator
@Component({
  selector: 'app-root', //tag html <app-root>
  templateUrl: './app.component.html',//chama o app.component.html
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'todo';
}
