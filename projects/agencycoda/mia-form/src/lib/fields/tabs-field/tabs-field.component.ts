import { Component, OnInit } from '@angular/core';
import { MiaBaseFieldComponent } from '../base-field.component';
import { FormGroup } from '@angular/forms';
import { MiaField } from '../../entities/mia-field';

@Component({
  selector: 'mia-tabs-field',
  templateUrl: './tabs-field.component.html',
  styleUrls: ['./tabs-field.component.scss']
})
export class TabsFieldComponent extends MiaBaseFieldComponent implements OnInit {

  constructor() {
    super();
  }

  ngOnInit(): void {
    
  }

  static updateValuesByItem(group: FormGroup, item: any, field: MiaField) {
    for (const tab of field.extra.tabs) {
      MiaBaseFieldComponent.updateValuesByItemFieldsOld(tab.fields, group, item);
    }
  }

  static updateItemByFormField(group: FormGroup, item: any, field: MiaField) {
    for (const tab of field.extra.tabs) {
      MiaBaseFieldComponent.updateItemByFormFieldsOld(tab.fields, group, item);
    }
  }
}
