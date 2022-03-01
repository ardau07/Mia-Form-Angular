import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl } from '@angular/forms';
import { MiaBaseFieldComponent } from '../base-field.component';

@Component({
  selector: 'mia-list-string-field',
  templateUrl: './list-string-field.component.html',
  styleUrls: ['./list-string-field.component.css']
})
export class ListStringFieldComponent extends MiaBaseFieldComponent implements OnInit {

  inputList!: FormArray;

  constructor() {
    super();
  }

  onClickAdd() {
    let control = new FormControl();
    control.setValue('');
    this.inputList.push(control);
  }

  getControlByIndex(index: number): FormControl {
    return this.inputList.controls[index] as FormControl;
  }

  onClickRemove(index: number) {
    this.inputList.removeAt(index);
  }

  createFormControl() {
    // Create Control
    this.input = new FormControl();
    // Create Control
    this.inputList = new FormArray([]);
    // Add in Group
    this.group.addControl(this.field.key, this.inputList);
  }
}
