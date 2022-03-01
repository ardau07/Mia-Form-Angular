import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import * as moment from 'moment';

@Component({
  selector: 'mia-date-filter-range-button',
  templateUrl: './date-filter-range-button.component.html',
  styleUrls: ['./date-filter-range-button.component.scss']
})
export class DateFilterRangeButtonComponent implements OnInit {

  @Output() changeRange = new EventEmitter<{ start: string, end: string }>();

  filterType = 1;

  rangeString = '';
  range = new FormGroup({
    start: new FormControl(),
    end: new FormControl()
  });

  constructor() { }

  ngOnInit(): void {
    this.loadConfig();
  }

  filterByDay() {
    this.filterType = 1;
    this.onFilterRange(moment(), moment());
    this.range.get('start')?.setValue(undefined);
    this.range.get('end')?.setValue(undefined);
  }

  filterByWeek() {
    this.filterType = 2;
    this.onFilterRange(moment().startOf('week'), moment().endOf('week'));
    this.range.get('start')?.setValue(undefined);
    this.range.get('end')?.setValue(undefined);
  }

  filterByMonth() {
    this.filterType = 3;
    this.onFilterRange(moment().startOf('month'), moment().endOf('month'));
    this.range.get('start')?.setValue(undefined);
    this.range.get('end')?.setValue(undefined);
  }

  filterByYear() {
    this.filterType = 4;
    this.onFilterRange(moment().startOf('year'), moment().endOf('year'));
    this.range.get('start')?.setValue(undefined);
    this.range.get('end')?.setValue(undefined);
  }

  onFilterRange(start: any, end: any) {
    this.rangeString = start.format('YYYY-MM-DD') + ' - ' + end.format('YYYY-MM-DD');
    this.changeRange.emit({ start: start.format('YYYY-MM-DD'), end: end.format('YYYY-MM-DD')});
  }

  loadConfig() {
    this.range.valueChanges.subscribe(result => {
      if(result.start != null && result.end != null){
        this.filterType = 5;
        this.onFilterRange(result.start, result.end);
      }
    });
  }
}
