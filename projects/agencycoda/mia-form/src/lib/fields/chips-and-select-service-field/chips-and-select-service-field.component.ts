import { MiaBaseCrudHttpService } from '@agencycoda/mia-core';
import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ChipsAndSelectFieldComponent } from '../chips-and-select-field/chips-and-select-field.component';

@Component({
  selector: 'mia-chips-and-select-service-field',
  templateUrl: './chips-and-select-service-field.component.html',
  styleUrls: ['./chips-and-select-service-field.component.scss'],
})
export class ChipsAndSelectServiceFieldComponent extends ChipsAndSelectFieldComponent implements OnInit {

  constructor(
    protected changeDectector: ChangeDetectorRef
  ) {
    super();
  }

  ngOnInit(): void {
    this.field.extra.options = [];
    super.ngOnInit();
  }

  processOptions(options: Array<any>) {
    this.field.extra.options = options;
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

    this.changeDectector.detectChanges();
  }

  configOptions() {
    let service: MiaBaseCrudHttpService<any> = this.field.extra.service;
    service.listOb(this.field.extra.query).subscribe(result => {
      this.processOptions(result.data);
    });
  }
}
