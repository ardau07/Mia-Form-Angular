import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MiaField } from '../../entities/mia-field';
import { MiaBaseFieldComponent } from '../base-field.component';

@Component({
  selector: 'mia-row-field',
  templateUrl: './row-field.component.html',
  styleUrls: ['./row-field.component.scss']
})
export class RowFieldComponent extends MiaBaseFieldComponent implements OnInit {

  constructor() {
    super();
  }

  ngOnInit(): void {
    
  }

  static updateValuesByItem(group: FormGroup, item: any, field: MiaField) {
    MiaBaseFieldComponent.updateValuesByItemFieldsOld(field.extra.fields, group, item);
  }

  static updateItemByFormField(group: FormGroup, item: any, field: MiaField) {
    MiaBaseFieldComponent.updateItemByFormFieldsOld(field.extra.fields, group, item);
  }
}
