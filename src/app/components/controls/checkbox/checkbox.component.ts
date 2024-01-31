import { Component, Input } from '@angular/core';
import { FormControl, ReactiveFormsModule } from "@angular/forms";

@Component({
  selector: 'app-checkbox',
  standalone: true,
  imports: [
    ReactiveFormsModule
  ],
  templateUrl: './checkbox.component.html',
  styleUrl: './checkbox.component.scss'
})
export class CheckboxComponent {

  @Input({ required: true }) control!: FormControl<boolean | null>;
  @Input({ required: true }) label!: string;

}
