import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MiaField } from '../../entities/mia-field';
import { MiaBaseFieldComponent } from '../base-field.component';

@Component({
  selector: 'lib-position-field',
  templateUrl: './position-field.component.html',
  styleUrls: ['./position-field.component.scss']
})
export class PositionFieldComponent extends MiaBaseFieldComponent implements OnInit {

  inputGroup!: FormGroup;

  inputTop!: FormControl;
  inputRight!: FormControl;
  inputBottom!: FormControl;
  inputLeft!: FormControl;

  constructor() {
    super();
  }

  createFormControl() {
    // Create inputs
    this.inputTop = new FormControl();
    this.inputRight = new FormControl();
    this.inputBottom = new FormControl();
    this.inputLeft = new FormControl();

    // Create Group
    this.inputGroup = new FormGroup({
      'top': this.inputTop,
      'right': this.inputRight,
      'bottom': this.inputBottom,
      'left': this.inputLeft
    });
    // Add in Group
    this.group.addControl(this.field.key, this.inputGroup);
  }

  static updateValuesByItem(group: FormGroup, item: any, field: MiaField) {
    group.get(field.key)?.setValue(item[field.key]);
  }

  static updateItemByFormField(group: FormGroup, item: any, field: MiaField) {
    item[field.key] = group.get(field.key)?.value;
  }
}

