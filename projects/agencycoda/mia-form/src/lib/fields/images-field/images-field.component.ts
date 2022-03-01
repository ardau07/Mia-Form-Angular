import { MiaFile } from '@agencycoda/mia-core';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MiaField } from '../../entities/mia-field';
import { MiaBaseFieldComponent } from '../base-field.component';

@Component({
  selector: 'mia-images-field',
  templateUrl: './images-field.component.html',
  styleUrls: ['./images-field.component.css']
})
export class ImagesFieldComponent extends MiaBaseFieldComponent implements OnInit {

  quantityItems!: Array<number>;

  isUploading = false;

  constructor() {
    super();
  }

  onClickRemove(index: number) {
    let data: Array<any> = this.input.value;
    data.splice(index, 1);
    this.input.setValue(data);
  }

  getPhotoByIndex(index: number): any {
    if(index >= this.input.value.length){
      return;
    }

    return this.input.value[index];
  }

  createFormControl() {
    this.quantityItems = Array(this.getLimit()).fill(null).map((_, i) => i);
    // Create Control
    this.input = new FormControl();
    this.input.setValue([]);
    // Add in Group
    this.group.addControl(this.field.key, this.input);
  }

  getLimit(): number {
    if(this.field.extra.limit == undefined){
      return 5;
    }
    return this.field.extra.limit;
  }

  onUploadFile(file: MiaFile | any): void {
    let data: Array<any> = this.input.value;
    data.push(file);
    this.input.setValue(data);
    this.isUploading = false;
  }

  static updateValuesByItem(group: FormGroup, item: any, field: MiaField) {
    group.get(field.key)?.setValue(item[field.key] == undefined ? [] : item[field.key]);
  }

  static updateItemByFormField(group: FormGroup, item: any, field: MiaField) {
    item[field.key] = group.get(field.key)?.value;
  }
}