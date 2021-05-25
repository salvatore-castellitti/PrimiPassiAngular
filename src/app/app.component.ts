import { Component } from '@angular/core';
import {MyTableConfig} from "./custom-table/custom-table.component";



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'TestAngular';
  MyCustomConfig = {
    customCssClass: null,
    text: 'Prova',
    icon: 'home'
  };

  data = ["mario", "giordano"];

  tableConfig = {
    headers: [
      {key: "1",
        label: "name",
      },
      {key: "2",
        label: "Surname",
      },
    ]
  }





}
