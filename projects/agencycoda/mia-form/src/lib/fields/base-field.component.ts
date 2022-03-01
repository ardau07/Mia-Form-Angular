import { Component, Input, OnInit } from "@angular/core";
import { FormControl, FormGroup } from "@angular/forms";
import { MiaField } from "../entities/mia-field";
import * as moment from 'moment';
import { FormArray } from "@angular/forms";

@Component({
    selector: 'mia-base-field',
    template: ''
})
export class MiaBaseFieldComponent implements OnInit {

    @Input() group!: FormGroup;
    @Input() field!: MiaField;
    //@Input() column: MiaColumn = new MiaColumn();
    //@Input() item: any;

    input!: FormControl;

    constructor() {
        
    }

    ngOnInit(): void {
        this.createFormControl();
    }

    createFormControl() {
        // Create Control
        this.input = new FormControl();
        // Config validators
        if(this.field.validators != undefined && this.field.validators.length > 0){
            this.input.setValidators(this.field.validators);
        }
        // If include default value
        if(this.field.extra && this.field.extra.default_value){
          this.input.setValue(this.field.extra.default_value);
        }
        // Add in Group
        this.group.addControl(this.field.key, this.input);
    }

    getFieldValueByKey(item: any, key: string|Array<string>|undefined): any {
        if(key == undefined){
          return '';
        }
  
        if (typeof key == 'string' && item[key] != undefined) {
          return item[key];
        }
  
        let valueFinal = item;
        for (const keyObj of key!) {
          if(valueFinal[keyObj] == undefined){
            return '';
          }
          valueFinal = valueFinal[keyObj];
        }
        return valueFinal;
      }

      getAppearance() {
        if(this.field.extra && this.field.extra.appearance){
          return this.field.extra.appearance;
        }
    
        return 'standard';
      }

  static updateValuesByItem(group: FormGroup, item: any, field: MiaField) {
    group.get(field.key)?.setValue(item[field.key]);
  }

  static updateValuesByItemFieldsOld(fields: Array<MiaField>, group: FormGroup, item: any) {
    for (const field of fields) {
      MiaBaseFieldComponent.updateValuesByItemFieldOld(field, group, item);
    }
  }

  static updateValuesByItemFieldOld(field: MiaField, group: FormGroup, item: any) {
    if(field.type == 'label'){
      return;
    }

    let control = group.controls[field.key];
    if(field.type == MiaField.TYPE_CUSTOM){
      if(field.extra.component.updateValuesByItem){
        field.extra.component.updateValuesByItem(group, item, field);
      }
      return;
    } 
    if(control == undefined || item[field.key] == undefined){
      return;
    }
    if(control instanceof FormArray){
      MiaBaseFieldComponent.updateValuesByItemInFormArrayOld(control, field.key, item);
      return;
    }
    if(field.type == 'date'){
      control.setValue(moment(item[field.key], 'YYYY-MM-DD HH:mm:ss'));
    } else if(field.type == 'event'){
      control.setValue(moment(item[field.key], 'YYYY-MM-DD HH:mm:ss'));
      let controlEnd = group.controls[field.extra.field_end_key];
      controlEnd.setValue(moment(item[field.extra.field_end_key], 'YYYY-MM-DD HH:mm:ss'));
    } else if(field.type == MiaField.TYPE_STRING_WITH_COLOR){
      control.setValue(item[field.key]);
      let controlColor = group.controls[field.extra.key_color];
      controlColor.setValue(item[field.extra.key_color]);
    } else {
      control.setValue(item[field.key]);
    }
  }

  static updateValuesByItemInFormArrayOld(group: FormArray, key: string, item: any) {
    for (const it of item[key]) {
      MiaBaseFieldComponent.createFormControlAndAddOld(it, group);
    }
  }

  static createFormControlAndAddOld(item: any, group: FormArray) {
    // Create Control
    let input = new FormControl();
    input.setValue(item);
    // Add in Group
    group.push(input);
  }

  static updateItemByFormField(group: FormGroup, item: any, field: MiaField) {
    item[field.key] = group.get(field.key)?.value;
  }

  static updateItemByFormFieldsOld(fields: Array<MiaField>, group: FormGroup, item: any) {
    for (const field of fields) {
      MiaBaseFieldComponent.updateItemByFormFieldOld(group, item, field);
    }
  }

  static updateItemByFormFieldOld(group: FormGroup, item: any, field: MiaField) {
    if(field.type == 'label'){
      return;
    }

    let control = group.controls[field.key];
    // TODO: Cambiar para que todos los fields se comporten de esta manera. Ya asi simplificar el tema del Mia Print
    if(field.type == MiaField.TYPE_CUSTOM){
      if(field.extra.component.updateItemByFormField){
        field.extra.component.updateItemByFormField(group, item, field);
      }
      return;
    } 
    if(control == undefined){
      return;
    }
    if(field.type == 'date' && control.value != undefined){
      item[field.key] = control.value.format('YYYY-MM-DD HH:mm:ss');
    } else if(field.type == 'event' && control.value != undefined){

      item[field.key] = control.value.format('YYYY-MM-DD HH:mm:ss');
      let controlEnd = group.controls[field.extra.field_end_key];
      if(controlEnd.value != undefined){
        item[field.extra.field_end_key] = controlEnd.value.format('YYYY-MM-DD HH:mm:ss');
      }

    } else if(field.type == MiaField.TYPE_STRING_WITH_COLOR && control.value != undefined){
      item[field.key] = control.value;
      let controlColor = group.controls[field.extra.key_color];
      if(controlColor.value != undefined){
        item[field.extra.key_color] = controlColor.value;
      }
    } else {
      item[field.key] = control.value;
    }
  }
}
