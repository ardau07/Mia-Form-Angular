import { MiaBaseCrudHttpService, MiaQuery } from '@agencycoda/mia-core';
import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormArray, FormControl } from '@angular/forms';
import { SelectServiceFieldComponent } from '../select-service-field/select-service-field.component';

@Component({
  selector: 'mia-avatar-list-service-field',
  templateUrl: './avatar-list-service-field.component.html',
  styleUrls: ['./avatar-list-service-field.component.scss']
})
export class AvatarListServiceFieldComponent extends SelectServiceFieldComponent implements OnInit {

  inputList!: FormArray;

  itemsFiltered: Array<any> = [];

  constructor(
    protected changeDetector: ChangeDetectorRef
  ) {
    super(changeDetector);
  }

  applySearch() {
    let query: string = this.input.value;
    this.itemsFiltered = this.items.filter(it => {
      let valIt: string = this.getFieldValueByKey(it, this.field.extra.field_display);
      // Verify if Selected
      for (const itSel of this.inputList.value) {
        if(itSel.id == it.id){
          return false;
        }
      }
      if(query == ''){
        return true;
      }
      // Verify if same query
      if(valIt.toLowerCase().includes(query.toLowerCase())){
        return true;
      }

      return false;
    });
  }

  onClickAdd(item: any) {
    let control = new FormControl();
    control.setValue(item);
    this.inputList.push(control);
    this.input.setValue('');
    this.applySearch();
  }

  getInitials(item: any) {
    let title: string = this.getFieldValueByKey(item, this.field.extra.field_display);
    return title.substr(0, 1).toUpperCase();
  }

  getAvatar(item: any) {
    return this.getFieldValueByKey(item, this.field.extra.field_photo);
  }

  onClickRemove(index: number) {
    this.inputList.removeAt(index);
    this.applySearch();
  }

  loadItems() {
    let query: MiaQuery = this.field.extra.query;
    query.itemPerPage = 5000;
    let service: MiaBaseCrudHttpService<any> = this.field.extra.service;
    service.list(query).then(result => {
      this.items = result.data;
      this.itemsFiltered = result.data;
      this.changeDetector.detectChanges();
    });
  }

  createFormControl() {
    // Create Control
    this.input = new FormControl();
    // Create Control
    this.inputList = new FormArray([]);
    // Add in Group
    this.group.addControl(this.field.key, this.inputList);
  }
}