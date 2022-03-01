import { Component, OnInit } from '@angular/core';
import { MiaBaseFieldComponent } from '../base-field.component';

@Component({
  selector: 'mia-divider-field',
  templateUrl: './divider-field.component.html',
  styleUrls: ['./divider-field.component.scss']
})
export class DividerFieldComponent extends MiaBaseFieldComponent implements OnInit {

  constructor() {
    super();
  }

  ngOnInit(): void {
  }
}