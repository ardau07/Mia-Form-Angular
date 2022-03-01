import { Component, OnInit } from '@angular/core';
import { MiaBaseFieldComponent } from '../base-field.component';

@Component({
  selector: 'mia-color-selector-field',
  templateUrl: './color-selector-field.component.html',
  styleUrls: ['./color-selector-field.component.scss']
})
export class ColorSelectorFieldComponent  extends MiaBaseFieldComponent implements OnInit {

  constructor() {
    super();
  }

  onClickColor(color: string) {
    this.input.setValue(color);
  }
}
