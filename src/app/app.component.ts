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

  order: MyOrder = {
    defaultColumn: "name",
    orderType:"asc"
  }

  search: MySearch = {
    columns: ["name", "surname"]
  }

  data = [
    this.person1,
    this.person2,
    this.person3,
  ];

  tableConfig = {
    headers: [
      {key: "name", label: "First Name",},
      {key: "surname", label: "Last Name",},
      {key: "taxCode", label: "Tax Code",},
    ],
    order: this.order,
    search: this.search
  }

}

class persons {
  name: string;
  surname: string;
  taxCode: string;
}

class MyOrder{
  defaultColumn: string;
  orderType: string;
}

class MySearch {
  columns: string[]
}
