import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MiaBaseFieldComponent } from '../base-field.component';
import * as moment from 'moment';

@Component({
  selector: 'mia-event-field',
  templateUrl: './event-field.component.html',
  styleUrls: ['./event-field.component.scss']
})
export class EventFieldComponent extends MiaBaseFieldComponent implements OnInit {

  isFirstLoad = true;
  isFirstLoadEnd = true;

  internalStartDate = new FormControl(moment());
  internalStartHour = new FormControl('00:00');
  internalEndDate = new FormControl();
  internalEndHour = new FormControl('00:00');

  hours = new Array<any>();

  inputEnd = new FormControl();

  hour:string[] = [moment().format('HH'), moment().format('mm')];

  constructor() {
    super();
  }

  ngOnInit() {
    this.loadConfig();
    this.createFormControl();
  }

  createFormControl() {
    // Create Control
    this.input = new FormControl();
    // Add in Group
    this.group.addControl(this.field.key, this.input);
    // Add in Group
    this.group.addControl(this.field.extra.field_end_key, this.inputEnd);

    this.input.valueChanges.subscribe(item => {
      if(!this.isFirstLoad || item == undefined){
        return;
      }

      this.isFirstLoad = false;

      this.internalStartHour.setValue(item.format('HH:mm'));
      this.internalStartDate.setValue(item);
    });

    this.inputEnd.valueChanges.subscribe(item => {
      if(!this.isFirstLoadEnd || item == undefined){
        return;
      }

      this.isFirstLoadEnd = false;

      this.internalEndHour.setValue(item.format('HH:mm'));
      this.internalEndDate.setValue(item);
    });
  }

  loadConfig() {
    let item = moment('00:00', 'hh:mm');
    for (let i = 0; i < 96; i++) {
      this.hours.push({ value: item.format('HH:mm'), title: item.format('hh:mma') });
      item.add(15, 'minutes');
    }
    // Start Date
    this.internalStartDate.valueChanges.subscribe(item => {
      this.updateStartDate();
      if(item == undefined || this.internalEndDate.value != undefined){
        return;
      }

      this.internalEndDate.setValue(moment(item));
    });

    // End Date
    this.internalEndDate.valueChanges.subscribe(item => {
      this.updateEndDate();
    });

    // Start Hour
    this.internalStartHour.valueChanges.subscribe(hour => {
      this.updateStartDate();
    });

    // End Hour
    this.internalEndHour.valueChanges.subscribe(hour => {
      this.updateEndDate();
    });
  }

  updateStartDate()
	{
    if( !this.isFirstLoad )
    {
      let dateFull = this.internalStartDate.value;
      if(dateFull == undefined){
        return;
      }

      let data = this.hour;
      if(this.internalStartHour.value)
      {
        data = this.internalStartHour.value.split(':');
      }

      dateFull.hour(parseInt(data[0]));
      dateFull.minutes(parseInt(data[1]));
      this.input.setValue(dateFull);
    }
	}

	updateEndDate()
	{
    if( !this.isFirstLoadEnd )
    {
      let dateFull = this.internalEndDate.value;
      if(dateFull == undefined){
        return;
      }

      let data = this.hour;
      if(this.internalEndHour.value)
      {
        data = this.internalEndHour.value.split(':');
      }

      dateFull.hour(parseInt(data[0]));
      dateFull.minutes(parseInt(data[1]));
      this.inputEnd.setValue(dateFull);
    }
	}
}
