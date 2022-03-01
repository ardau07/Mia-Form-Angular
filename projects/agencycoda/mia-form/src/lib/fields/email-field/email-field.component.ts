import { Component, OnInit } from '@angular/core';
import { EmailValidator, FormControl, Validators } from '@angular/forms';
import { MiaBaseFieldComponent } from '../base-field.component';

@Component({
  selector: 'mia-email-field',
  templateUrl: './email-field.component.html',
  styleUrls: ['./email-field.component.scss']
})
export class EmailFieldComponent extends MiaBaseFieldComponent implements OnInit {

  constructor() {
    super();
  }

  createFormControl() {
    // Create Control
    this.input = new FormControl();
    // Config validator
    this.input.setValidators([Validators.email]);
    // If include default value
    if(this.field.extra && this.field.extra.default_value){
      this.input.setValue(this.field.extra.default_value);
    }
    // Add in Group
    this.group.addControl(this.field.key, this.input);
}
}

