import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatChipInputEvent } from '@angular/material/chips';
import { MiaBaseFieldComponent } from '../base-field.component';

@Component({
  selector: 'mia-tags-field',
  templateUrl: './tags-field.component.html',
  styleUrls: ['./tags-field.component.scss']
})
export class TagsFieldComponent extends MiaBaseFieldComponent implements OnInit {

  constructor() {
    super();
  }

  createFormControl() {
    // Create Control
    this.input = new FormControl([]);
    // Config validators
    if(this.field.validators != undefined && this.field.validators.length > 0){
        this.input.setValidators(this.field.validators);
    }
    // Add in Group
    this.group.addControl(this.field.key, this.input);
}

  addTagFromInput(event: MatChipInputEvent) {
    if (event.value) {
      let tags = this.input.value;
      tags.push(event.value);
      this.input.setValue(tags);
      event.input!.value = '';
    }
  }

  remove(tag: string) {
    let tags = this.input.value;
    let index = tags.indexOf(tag);
    if(index >= 0) {
      tags.splice(index, 1);
    }
    
    this.input.setValue(tags);
  }
}
