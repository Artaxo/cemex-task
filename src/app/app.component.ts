import { Component, OnInit } from '@angular/core';
import { MockDataService } from "./services/mock-data.service";
import { Observable } from "rxjs";
import { TableEntityModel } from "./model/table-entity.model";


@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit{

  public tableData$: Observable<TableEntityModel>;

  constructor(private _mockDataService: MockDataService) {
    this.tableData$ = this._mockDataService.getData();
  }
  ngOnInit(): void {
  }
}
