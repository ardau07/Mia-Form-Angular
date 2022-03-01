import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { MiaBaseFieldComponent } from '../base-field.component';
import { map, startWith, switchMap } from 'rxjs/operators';
import { MiaBaseCrudHttpService, MiaQuery } from '@agencycoda/mia-core';

@Component({
  selector: 'mia-autocomplete-service-field',
  templateUrl: './autocomplete-service-field.component.html',
  styleUrls: ['./autocomplete-service-field.component.scss']
})
export class AutocompleteServiceFieldComponent extends MiaBaseFieldComponent implements OnInit {

  filteredOptions!: Observable<any[]>;

  constructor() {
    super();
  }

  ngOnInit() {
    super.ngOnInit();
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
}
