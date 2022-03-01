import { Component, OnInit } from '@angular/core';
import { MiaBaseFieldComponent } from '../base-field.component';

@Component({
  selector: 'mia-string-title-field',
  templateUrl: './string-title-field.component.html',
  styleUrls: ['./string-title-field.component.scss']
})
export class StringTitleFieldComponent extends MiaBaseFieldComponent implements OnInit {

  constructor() {
    super();
  }

}
