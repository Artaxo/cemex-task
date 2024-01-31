import {Component, Input} from '@angular/core';
import {CardComponent} from "../layout/card/card.component";
import {TableEntityModel} from "../../model/table-entity.model";
import {CurrencyPipe, NgClass} from "@angular/common";
import {StatusEnum} from "../../enums/status.enum";

@Component({
  selector: 'app-table-entity',
  standalone: true,
  imports: [
    CardComponent,
    CurrencyPipe,
    NgClass
  ],
  templateUrl: './table-entity.component.html',
  styleUrl: './table-entity.component.scss'
})
export class TableEntityComponent {

  statusEnum = StatusEnum;
  @Input({ required: true }) entity!: TableEntityModel;

}
