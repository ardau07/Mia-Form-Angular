import { MiaFile } from '@agencycoda/mia-core';
import { Component, OnInit } from '@angular/core';
import { MiaBaseFieldComponent } from '../base-field.component';

@Component({
  selector: 'mia-file-one-field',
  templateUrl: './file-one-field.component.html',
  styleUrls: ['./file-one-field.component.scss']
})
export class FileOneFieldComponent extends MiaBaseFieldComponent implements OnInit {

  isUploading = false;

  constructor() {
    super();
  }

  onUploadFile(file: MiaFile | any): void {
    this.input.setValue(file);
    this.isUploading = false;
  }

  getButtonText() {
    if(this.field.extra && this.field.extra.button_text){
      return this.field.extra.button_text;
    }

    return 'Upload photo here';
  }
}