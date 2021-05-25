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

}

class MyHeaders {
  key: string;
  label: string;
}

export class MyTableConfig{
  headers: MyHeaders[];
}
