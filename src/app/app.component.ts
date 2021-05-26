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

  person1: persons = {
    name: "mario",
    surname: "bianchi",
    taxCode: "AAAA",
  }
  person2: persons = {
    name: "alberto",
    surname: "rossi",
    taxCode: "bbbb",
  }
  person3: persons = {
    name: "filippo",
    surname: "verdi",
    taxCode: "cccc",
  }

  data = [
    this.person1,
    this.person2,
    this.person3,
  ];

  tableConfig = {
    headers: [
      {key: "name",
        label: "name",
      },
      {key: "surname",
        label: "surname",
      },
    ]
  }

}

class persons {
  name: string;
  surname: string;
  taxCode: string;
}
