import { MiaFile } from '@agencycoda/mia-core';
import { Component, OnInit } from '@angular/core';
import { MiaBaseFieldComponent } from '../base-field.component';

@Component({
  selector: 'mia-photo-field',
  templateUrl: './photo-field.component.html',
  styleUrls: ['./photo-field.component.scss']
})
export class PhotoFieldComponent extends MiaBaseFieldComponent implements OnInit {

  isUploading = false;

  constructor() {
    super();
  }

  onUploadFile(file: MiaFile | any): void {
    this.input.setValue(file.url);
    this.isUploading = false;
  }
}
