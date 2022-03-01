import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { MiaBaseFieldComponent } from '../base-field.component';
import { map, startWith } from 'rxjs/operators';

@Component({
  selector: 'mia-autocomplete-field',
  templateUrl: './autocomplete-field.component.html',
  styleUrls: ['./autocomplete-field.component.scss']
})
export class AutocompleteFieldComponent extends MiaBaseFieldComponent implements OnInit {

  filteredOptions!: Observable<string[]>;

  constructor() {
    super();
  }

  ngOnInit() {
    super.ngOnInit();
    this.filteredOptions = this.input.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value))
    );
  }

  private _filter(value: string): string[] {
    if(value == undefined){
      return [];
    }
    console.log(value);
    const filterValue = value.toLowerCase();
    let options: Array<string> = this.field.extra.options;
    return options.filter(option => option.toLowerCase().indexOf(filterValue) >= 0);
  }
}
