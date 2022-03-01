import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MiaBaseFieldComponent } from '../base-field.component';

@Component({
  selector: 'mia-string-with-color-field',
  templateUrl: './string-with-color-field.component.html',
  styleUrls: ['./string-with-color-field.component.scss']
})
export class StringWithColorFieldComponent extends MiaBaseFieldComponent implements OnInit {

  inputColor!: FormControl;
  inputCustomColor!: FormControl;

  colors = ['#ffbdbd', '#f1e3c3', '#fcf8c3', '#daf0bc', '#cdf7cd', '#ccf8e6', '#cee2f8', '#cfc4f7', '#f8d4f8', '#d8d8d8', '#a7a7a7'];

  constructor() {
    super();
  }

  applyColor(col: string) {
    this.inputColor.setValue(col);
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
    // Create control color
    this.inputColor = new FormControl();
    // Add in Group
    this.group.addControl(this.field.extra.key_color, this.inputColor);
    // Create control custom color
    this.inputCustomColor = new FormControl();
    this.inputCustomColor.valueChanges.subscribe(result => {
      if(result){
        this.applyColor(result);
      }
    });
  }
}

