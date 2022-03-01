import { MiaBaseCrudHttpService, MiaQuery } from '@agencycoda/mia-core';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Observable } from 'rxjs';
import { map, startWith, switchMap } from 'rxjs/operators';
import { MiaBaseFieldComponent } from '../base-field.component';
import {COMMA, ENTER} from '@angular/cdk/keycodes';
import { MatChipInputEvent } from '@angular/material/chips';
import { FormArray, FormControl } from '@angular/forms';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';

@Component({
  selector: 'mia-input-with-chip-service-field',
  templateUrl: './input-with-chip-service-field.component.html',
  styleUrls: ['./input-with-chip-service-field.component.scss']
})
export class InputWithChipServiceFieldComponent extends MiaBaseFieldComponent implements OnInit {

  filteredOptions!: Observable<any[]>;

  separatorKeysCodes: number[] = [ENTER, COMMA];

  inputList!: FormArray;

  @ViewChild('chipInput') chipInput!: ElementRef<HTMLInputElement>;

  constructor() {
    super();
  }

  ngOnInit(): void {
    super.ngOnInit();
    this.loadConfig();
  }

  loadConfig() {
    this.filteredOptions = this.input.valueChanges.pipe(
      startWith(''),
      switchMap(value => {
        let query: MiaQuery = this.field.extra.query;
        query.search = value;
        let service: MiaBaseCrudHttpService<any> = this.field.extra.service;
        return service.listOb(query);
      }),
      map(result => {
        return result.data;
      })
      //map(value => this._filter(value))
    );
  }

  displayFn(item: any): string {
    if(item == undefined){
      return '';
    }
    let keyDisplay = this.field.extra.field_display;
    return item[keyDisplay];
  }

  add(event: MatChipInputEvent): void {
    const value = (event.value || '').trim();

    // Add our fruit
    if (value) {
      let valItem: any = { id: -1, title: value, isObj: false };
      valItem[this.field.extra.field_display] = value;
      this.inputList.value.push(valItem);
    }

    // Clear the input value
    //event.input!.clear();
    this.chipInput.nativeElement.value = '';

    this.input.setValue('');
  }

  remove(fruit: string): void {
    const index = this.inputList.value.indexOf(fruit);

    if (index >= 0) {
      this.inputList.value.splice(index, 1);
    }
  }

  selected(event: MatAutocompleteSelectedEvent): void {
    let valItem = event.option.value;
    valItem.isObj = true;
    this.inputList.value.push(valItem);
    this.chipInput.nativeElement.value = '';
    this.input.setValue(null);
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
