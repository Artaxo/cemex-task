import {Component, EventEmitter, Output} from '@angular/core';
import {CardComponent} from "../layout/card/card.component";
import {FormControl, FormGroup, ReactiveFormsModule} from "@angular/forms";
import {CheckboxComponent} from "../controls/checkbox/checkbox.component";
import {StatusEnum} from "../../enums/status.enum";

@Component({
  selector: 'app-table-filter',
  standalone: true,
  imports: [
    CardComponent,
    ReactiveFormsModule,
    CheckboxComponent,
  ],
  templateUrl: './table-filter.component.html',
  styleUrl: './table-filter.component.scss'
})
export class TableFilterComponent {

  @Output() statusFilterChanged = new EventEmitter<StatusEnum[] | null>();

  checkboxForm = new FormGroup({
    activeFilter: new FormControl<boolean>(true),
    pendingFilter: new FormControl<boolean>(true),
    waitingFilter: new FormControl<boolean>(true),
  });

  constructor() {
    this.checkboxForm.valueChanges.subscribe((formValues) => {
      const values = Object.values(formValues);
      const filter: StatusEnum[] = [];

      values[0] && filter.push(StatusEnum.ACTIVE);
      values[1] && filter.push(StatusEnum.PENDING);
      values[2] && filter.push(StatusEnum.WAITING);

      this.statusFilterChanged.emit(filter);
    });
  }
}
