import {Component, Input} from '@angular/core';
import {TableEntityModel} from "../../model/table-entity.model";
import {NgForOf, NgIf} from "@angular/common";
import {CardComponent} from "../layout/card/card.component";
import {TableEntityComponent} from "../table-entity/table-entity.component";
import {TableFilterComponent} from "../table-filter/table-filter.component";
import {StatusEnum} from "../../enums/status.enum";

@Component({
  selector: 'app-table',
  standalone: true,
  imports: [
    NgForOf,
    CardComponent,
    TableEntityComponent,
    TableFilterComponent,
    NgIf
  ],
  templateUrl: './table.component.html',
  styleUrl: './table.component.scss'
})
export class TableComponent {

  @Input({ required: true }) tableData: TableEntityModel[] = [];

  public statusFilter: StatusEnum[] = [StatusEnum.ACTIVE, StatusEnum.PENDING, StatusEnum.WAITING]
  constructor() {
  }

  handleStatusFilterChanged(filter: StatusEnum[] | null): void {
    this.statusFilter = filter ?? [];
  }
}
