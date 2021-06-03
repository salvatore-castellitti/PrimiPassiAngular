import { Component } from '@angular/core';
import {MyTableConfig} from "./custom-table/custom-table.component";
import {MyButtonConfig} from "./custom-button/custom-button.component";



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'TestAngular';


//button declaration
  testButton = {
    customCssClass: null,
    text: 'Prova',
    icon: 'home'
  };

  //button Config
  insertButton = {
    customCssClass: null,
    text: 'Insert',
    icon: 'new_label',
  }

  deleteButton = {
    customCssClass: null,
    text: 'Delete',
    icon: 'delete',
  }

  updateButton = {
    customCssClass: null,
    text: 'Update',
    icon: 'settings',
  }

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
    this.person1,
    this.person2,
    this.person3,
    this.person1,
    this.person2,
    this.person3,
  ];

  pagination: MyPagination= {
    itemPerPage: 4,
    itemPerPageOptions: [4,8,12]
  }

  actions = [this.insertButton,this.updateButton,this.deleteButton]

  tableConfig = {
    headers: [
      {key: "name", label: "First Name",},
      {key: "surname", label: "Last Name",},
      {key: "taxCode", label: "Tax Code",},
    ],
    order: this.order,
    search: this.search,
    pagination: this.pagination,
    actions:this.actions
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

class MyPagination{
  itemPerPage: number;
  itemPerPageOptions: number[];
}



