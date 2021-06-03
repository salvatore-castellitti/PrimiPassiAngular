import {Component, Input, OnInit, Pipe} from '@angular/core';


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
  totalPage: number;
  totalPageArray: any[];
  activePage;

  constructor() {
    this.totalPageArray = Array(this.totalPage).fill(0).map((x,i) =>i);
    console.log(this.totalPageArray)
  }

  ngOnInit(): void {
    this.sort(this.tableConfig.order.defaultColumn,this.tableConfig.order.orderType)
    this.totalPage = Math.floor(this.data.length/this.tableConfig.pagination.itemPerPage)+1;
    this.totalPageArray = Array(this.totalPage).fill(0).map((x,i) =>i);
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

export class MyPagination{
  itemPerPage: number;
  itemPerPageOptions: number[];
}

export class MyTableConfig{
  headers: MyHeaders[];
  order : MyOrder;
  search : MySearch;
  pagination: MyPagination;
}
