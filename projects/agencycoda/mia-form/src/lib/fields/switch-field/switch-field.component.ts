import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MiaField } from '../../entities/mia-field';
import { MiaBaseFieldComponent } from '../base-field.component';

@Component({
  selector: 'mia-switch-field',
  templateUrl: './switch-field.component.html',
  styleUrls: ['./switch-field.component.scss']
})
export class SwitchFieldComponent extends MiaBaseFieldComponent implements OnInit {

  constructor() {
    super();
  }

  static updateValuesByItem(group: FormGroup, item: any, field: MiaField) {
    group.get(field.key)?.setValue(item[field.key] == 1 ? true : false);
  }

  static updateItemByFormField(group: FormGroup, item: any, field: MiaField) {
    item[field.key] = group.get(field.key)?.value == true ? 1 : 0;
  }
}