import { MiaBaseFieldComponent, MiaField } from '@agencycoda/mia-form';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { GooglePlaceDirective } from 'ngx-google-places-autocomplete';
import { Address } from 'ngx-google-places-autocomplete/objects/address';

@Component({
  selector: 'mia-google-places-field',
  templateUrl: './google-places-field.component.html',
  styleUrls: ['./google-places-field.component.css']
})
export class GooglePlacesFieldComponent extends MiaBaseFieldComponent {

  @ViewChild("placesRef") placesRef!: GooglePlaceDirective;

  inputLatitude!: FormControl;
  inputLongitude!: FormControl;

  constructor() {
    super();
  }

  handleAddressChange(address: Address) {
    this.input.setValue(address.name);
    this.inputLatitude.setValue(address.geometry.location.lat());
    this.inputLongitude.setValue(address.geometry.location.lng());
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

    this.inputLatitude = new FormControl();
    this.group.addControl(this.field.extra.key_latitude, this.inputLatitude);

    this.inputLongitude = new FormControl();
    this.group.addControl(this.field.extra.key_longitude, this.inputLongitude);
}

  static updateValuesByItem(group: FormGroup, item: any, field: MiaField) {
    group.get(field.key)?.setValue(item[field.key]);
    group.get(field.extra.key_latitude)?.setValue(item[field.extra.key_latitude]);
    group.get(field.extra.key_longitude)?.setValue(item[field.extra.key_longitude]);
  }

  static updateItemByFormField(group: FormGroup, item: any, field: MiaField) {
    item[field.key] = group.get(field.key)?.value;
    item[field.extra.key_latitude] = group.get(field.extra.key_longitude)?.value;
    item[field.extra.key_longitude] = group.get(field.extra.key_longitude)?.value;
  }
}
