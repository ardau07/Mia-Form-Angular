import { MiaFile } from '@agencycoda/mia-core';
import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl } from '@angular/forms';
import { MiaBaseFieldComponent } from '../base-field.component';

@Component({
  selector: 'lib-gallery-field',
  templateUrl: './gallery-field.component.html',
  styleUrls: ['./gallery-field.component.scss']
})
export class GalleryFieldComponent extends MiaBaseFieldComponent implements OnInit {

  inputList!: FormArray;

  isUploading = false;

  constructor() {
    super();
  }

  onUploadFile(file: MiaFile | any): void {
    let control = new FormControl();
    control.setValue({ url: file.url, alt: '', caption: '', name: file.name, size: file.size });
    this.inputList.push(control);
  }

  getControlByIndex(index: number): FormControl {
    return this.inputList.controls[index] as FormControl;
  }

  onClickRemove(index: number) {
    this.inputList.removeAt(index);
  }

  createFormControl() {
    // Create Control
    this.inputList = new FormArray([]);
    // Add in Group
    this.group.addControl(this.field.key, this.inputList);
  }
}
