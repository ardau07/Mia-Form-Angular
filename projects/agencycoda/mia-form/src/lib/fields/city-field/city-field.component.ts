import { MiaBaseHttpService } from '@agencycoda/mia-core';
import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MiaBaseFieldComponent } from '../base-field.component';

@Component({
  selector: 'mia-city-field',
  templateUrl: './city-field.component.html',
  styleUrls: ['./city-field.component.scss']
})
export class CityFieldComponent extends MiaBaseFieldComponent implements OnInit {

  data = new Array<any>();

  country!: FormControl;
  countrySelected: any;

  state!: FormControl;
  stateSelected: any;

  constructor(
    protected baseService: MiaBaseHttpService
  ) { 
    super();
  }

  ngOnInit(): void {
    this.loadData();
    this.createFormControl();
    this.createLocationControls();
  }

  createLocationControls() {
    // Create Control
    this.country = new FormControl();
    this.state = new FormControl();

    this.country.valueChanges.subscribe(result => this.countrySelected = result);
    this.state.valueChanges.subscribe(result => this.stateSelected = result);

    this.input.valueChanges.subscribe(result => {
      this.processInitValue();
    });
  }

  processInitValue() {
    if(this.input.value == undefined || this.input.value == 0){
      return;
    }

    if(this.countrySelected != undefined || this.stateSelected != undefined){
      return;
    }

    let cityId = this.input.value;
    for (const country of this.data) {
      for (const state of country.states) {
        for (const city of state.cities) {
          if(city.id == cityId){
            this.state.setValue(state);
            this.country.setValue(country)
            return;
          }
        }
      }
    }
  }

  loadData() {
    this.baseService.get<Array<any>>(this.field.extra.basePath + 'mia-location/all-data').then(result => {
      this.data = result;
      this.processInitValue();
    });
  }
}
