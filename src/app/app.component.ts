import { Component, OnInit } from '@angular/core';
import { MockDataService } from "./services/mock-data.service";
import { Observable } from "rxjs";
import { TableEntityModel } from "./model/table-entity.model";
import {TableComponent} from "./components/table/table.component";
import {AsyncPipe} from "@angular/common";


@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  imports: [
    TableComponent,
    AsyncPipe
  ],
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit{

  public tableData$: Observable<TableEntityModel[]>;

  constructor(private _mockDataService: MockDataService) {
    this.tableData$ = this._mockDataService.getData();
  }
  ngOnInit(): void {
  }
}
