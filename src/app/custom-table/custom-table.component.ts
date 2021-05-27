import {Component, Input, OnInit} from '@angular/core';


@Component({
  selector: 'app-custom-table',
  templateUrl: './custom-table.component.html',
  styleUrls: ['./custom-table.component.css']
})
export class CustomTableComponent implements OnInit {

  @Input() tableConfig: MyTableConfig;
  @Input() data: any[];

  searchCol: string;
  searchValue: string;

  constructor() { }

  ngOnInit(): void {
    this.sort(this.tableConfig.order.defaultColumn,this.tableConfig.order.orderType)
  }

  sort(defaultColumn, type) {
    this.tableConfig.order.defaultColumn = defaultColumn
    if(type === "asc"){
      this.data.sort((a,b) => a[defaultColumn] < b[defaultColumn] ? 1 : a[defaultColumn] > b[defaultColumn] ? -1 : 0)
      this.tableConfig.order.orderType = "desc"
    }
    else{
      this.data.sort((a,b) => a[defaultColumn] > b[defaultColumn] ? 1 : a[defaultColumn] < b[defaultColumn] ? -1 : 0)
      this.tableConfig.order.orderType = "asc"

    }
  }
}

export class MyHeaders {
  key: string;
  label: string;
}

export class MyOrder{
  defaultColumn: string;
  orderType: string;
}

export class MySearch {
  columns: string[]
}

export class MyTableConfig{
  headers: MyHeaders[];
  order : MyOrder;
  search : MySearch;
}
