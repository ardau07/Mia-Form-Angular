import { MiaFile } from '@agencycoda/mia-core';
import { Component, OnInit } from '@angular/core';
import { MiaBaseFieldComponent } from '../base-field.component';

@Component({
  selector: 'mia-photo-header-field',
  templateUrl: './photo-header-field.component.html',
  styleUrls: ['./photo-header-field.component.scss']
})
export class PhotoHeaderFieldComponent extends MiaBaseFieldComponent implements OnInit {

  isUploading = false;

  constructor() {
    super();
  }

  onUploadFile(file: MiaFile | any): void {
    if(this.field.extra && this.field.extra.saveObj){
      this.input.setValue(file);
    } else {
      this.input.setValue(file.url);
    }
    this.isUploading = false;
  }
}
