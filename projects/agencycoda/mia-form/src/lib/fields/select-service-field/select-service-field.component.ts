import { MiaBaseCrudHttpService, MiaQuery, nil } from '@agencycoda/mia-core';
import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { SelectFieldComponent } from '../select-field/select-field.component';

@Component({
  selector: 'mia-select-service-field',
  templateUrl: './select-service-field.component.html',
  styleUrls: ['./select-service-field.component.scss']
})
export class SelectServiceFieldComponent extends SelectFieldComponent implements OnInit {

  items: Array<any> = [];

  constructor(
    protected changeDetector: ChangeDetectorRef
  ) {
    super();
  }

  ngOnInit() {
    super.ngOnInit();
    this.loadItems();
  }

  loadItems() {
    // Verify if has extra params
    let extraParams = this.field.extra.extraParams;
    if(extraParams == undefined){
      extraParams = {};
    }

    let query: MiaQuery = this.field.extra.query;
    query.itemPerPage = 5000;
    let service: MiaBaseCrudHttpService<any> = this.field.extra.service;
    service.listWithExtras(query, extraParams).then(result => {
      this.items = result.data;
      this.changeDetector.detectChanges();
    });
  }

  configSubject() {
    if(!this.field.extra.can_add || this.configuredSubject){
      return;
    }

    let subject: Subject<any> = this.field.extra.add_subject;
    subject.pipe(nil()).subscribe(res => {
      let obj: any = res;
      this.items.push(res);
      this.input.setValue(obj.id);
      this.changeDetector.detectChanges();
    });

    this.configuredSubject = true;
  }
}
