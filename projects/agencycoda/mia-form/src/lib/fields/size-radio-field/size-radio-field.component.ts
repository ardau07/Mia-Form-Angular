import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MiaField } from '../../entities/mia-field';
import { MiaBaseFieldComponent } from '../base-field.component';

@Component({
  selector: 'lib-size-radio-field',
  templateUrl: './size-radio-field.component.html',
  styleUrls: ['./size-radio-field.component.scss']
})
export class SizeRadioFieldComponent extends MiaBaseFieldComponent implements OnInit {

  inputCustom!: FormControl;

  constructor() {
    super();
  }

  onClickWithString(name: string) {
    this.input.setValue(this.field.extra.class_name + '-' + name);
    this.inputCustom.setValue(undefined);
  }

  onClickResetCustom() {
    this.inputCustom.setValue(undefined);
  }

  onClickCustom() {
    this.input.setValue(undefined);
  }

  createFormControl() {
    // Create Control
    this.input = new FormControl();
    // Config validators
    if(this.field.validators != undefined && this.field.validators.length > 0){
        this.input.setValidators(this.field.validators);
    }
    // Add in Group
    this.group.addControl(this.field.key, this.input);

    // Create Control
    this.inputCustom = new FormControl();
    // Add in Group
    this.group.addControl(this.field.extra.key_custom, this.inputCustom);
  }

  static updateValuesByItem(group: FormGroup, item: any, field: MiaField) {
    if(item[field.key] == undefined && field.extra && field.extra.default_value){
      group.get(field.key)?.setValue(field.extra.default_value);
    } else {
      group.get(field.key)?.setValue(item[field.key]);
    }

    group.get(field.extra.key_custom)?.setValue(item[field.extra.key_custom]);
  }

  static updateItemByFormField(group: FormGroup, item: any, field: MiaField) {
    item[field.key] = group.get(field.key)?.value;
    item[field.extra.key_custom] = group.get(field.extra.key_custom)?.value;
  }
}