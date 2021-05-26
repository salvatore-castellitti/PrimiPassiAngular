import {Component, Input, OnInit} from '@angular/core';


@Component({
  selector: 'app-custom-table',
  templateUrl: './custom-table.component.html',
  styleUrls: ['./custom-table.component.css']
})
export class CustomTableComponent implements OnInit {

  @Input() tableConfig: MyTableConfig;
  @Input() data: any[];

  constructor() { }

  ngOnInit(): void {
  }

  booleanValue: any = false;
  sort(headerKey, booleanValue) {
    if(booleanValue == true){
      this.data.sort((a,b) => a[headerKey] < b[headerKey] ? 1 : a[headerKey] > b[headerKey] ? -1 : 0)
      this.booleanValue = !this.booleanValue
    }
    else{
      this.data.sort((a,b) => a[headerKey] > b[headerKey] ? 1 : a[headerKey] < b[headerKey] ? -1 : 0)
      this.booleanValue = !this.booleanValue

    }
  }
}

export class MyHeaders {
  key: string;
  label: string;
}
//
// export class MyOrder{
//   defaultColumn: string;
//   orderType: string;
// }

export class MyTableConfig{
  headers: MyHeaders[];
  // order : MyOrder;
}
