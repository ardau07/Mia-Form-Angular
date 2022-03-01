import { nil } from '@agencycoda/mia-core';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormArray, FormControl } from '@angular/forms';
import { MatSelectionList, MatSelectionListChange } from '@angular/material/list';
import { Subject } from 'rxjs';
import { MiaBaseFieldComponent } from '../base-field.component';

@Component({
  selector: 'mia-chips-and-select-field',
  templateUrl: './chips-and-select-field.component.html',
  styleUrls: ['./chips-and-select-field.component.scss']
})
export class ChipsAndSelectFieldComponent extends MiaBaseFieldComponent implements OnInit {

  @ViewChild('selectionList') selectionList!: MatSelectionList;

  inputList!: FormArray;

  optionsFiltered = new Array<any>();

  configuredSubject = false;

  constructor() {
    super();
  }

  ngOnInit() {
    super.ngOnInit();
    this.configSearch();
    this.configOptions();
    this.configSubject();
  }

  onClickNewItem() {
    let subject: Subject<any> = this.field.extra.add_subject;
    subject.next(true);
  }

  onClickAdd() {
    let options: Array<any> = this.field.extra.options;

    if(this.field.extra.limit != undefined){
      // Verify limit quantity
      let newItemsCount = options.filter(opt => opt.isSelected).length;
      let selectedItemsCount = this.inputList.length;

      if(newItemsCount + selectedItemsCount > this.field.extra.limit){
        alert(this.field.extra.limit_message_error);
        return;
      }
    }

    
    for (const opt of options) {
      if(!opt.isSelected){
        continue;
      }

      let control = new FormControl();
      control.setValue(opt);
      this.inputList.push(control);

      opt.isSelected = false;
      opt.isShow = false;
    }

    this.input.setValue('');
    this.cleanOptions();
  }

  onClickRemove(index: number) {
    let control = this.inputList.controls[index];
    control.value.isSelected = false;
    control.value.isShow = true;
    this.inputList.removeAt(index);

    this.cleanOptions();
  }

  onSelectItem(event: MatSelectionListChange) {
    let item: any = event.options[0].value;
    item.isSelected = event.options[0].selected;
  }

  createFormControl() {
    // Create Control
    this.input = new FormControl();
    // Create Control
    this.inputList = new FormArray([]);
    // Add in Group
    this.group.addControl(this.field.key, this.inputList);
  }

  hasOneOption(): boolean {
    let options: Array<any> = this.field.extra.options;
    return options.filter(o => o.isShow).length > 0;
  }

  cleanOptions() {
    let options: Array<any> = this.field.extra.options;
    
    this.optionsFiltered = new Array<any>();
    for (let i = 0; i < 10; i++) {
      if(i > options.length-1 || !options[i].isShow){
        continue;
      }
      this.optionsFiltered.push(options[i]);
    }
  }

  configSearch() {
    this.input.valueChanges.subscribe(query => {
      if(query == undefined || query == '' || query == null){
        this.cleanOptions();
        return;
      }

      let options: Array<any> = this.field.extra.options;
      this.optionsFiltered = options.filter(o => {
        let title: string = o[this.field.extra.field_display];
        if(o.isShow && title.toLowerCase().includes(query.toLowerCase())){
          return true;
        }

        return false;
      });
    });
  }

  configOptions() {
    let options: Array<any> = this.field.extra.options;
    options.forEach(opt => {
      opt.isSelected = false;
      opt.isShow = true;
    });

    for (let i = 0; i < 10; i++) {
      if(i > options.length-1 || !options[i].isShow){
        continue;
      }
      this.optionsFiltered.push(options[i]);
    }
  }

  configSubject() {
    if(!this.field.extra.can_add || this.configuredSubject){
      return;
    }

    let subject: Subject<any> = this.field.extra.add_subject;
    subject.pipe(nil()).subscribe(res => {
      if(res == undefined){
        return;
      }

      let obj: any = res;

      obj.isSelected = true;
      obj.isShow = true;
      this.field.extra.options.push(res);
      this.onClickAdd();
    });

    this.configuredSubject = true;
  }
}
