import { MiaBaseCrudHttpService, MiaPagination } from '@agencycoda/mia-core';
import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl } from '@angular/forms';
import { AutocompleteServiceFieldComponent } from '../autocomplete-service-field/autocomplete-service-field.component';
import { MiaBaseFieldComponent } from '../base-field.component';

@Component({
  selector: 'mia-list-service-field',
  templateUrl: './list-service-field.component.html',
  styleUrls: ['./list-service-field.component.scss']
})
export class ListServiceFieldComponent extends AutocompleteServiceFieldComponent implements OnInit {

  inputList!: FormArray;
  
  _isLoading = true;

  constructor() {
    super();
  }

  ngOnInit() {
    super.ngOnInit();
    this.loadItems();
  }

  onClickAdd() {
    if(this.input.value == null || this.input.value == undefined){
      return;
    }
    let control = new FormControl();
    control.setValue(this.input.value);
    this.inputList.push(control);
    this.input.setValue(null);
  }

  onClickRemove(index: number) {
    this.inputList.removeAt(index);
  }

  loadItems() {
    if(this.field.extra.field_list == undefined){
      return;
    }
    
    this._isLoading = true;
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
