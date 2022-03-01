import { Component, OnInit } from '@angular/core';
import { MiaBaseFieldComponent } from '../base-field.component';

@Component({
  selector: 'mia-slider-field',
  templateUrl: './slider-field.component.html',
  styleUrls: ['./slider-field.component.scss']
})
export class SliderFieldComponent extends MiaBaseFieldComponent implements OnInit {

  constructor() {
    super();
  }

}