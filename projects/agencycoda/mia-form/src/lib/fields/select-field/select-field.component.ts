import { nil } from '@agencycoda/mia-core';
import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { MiaBaseFieldComponent } from '../base-field.component';

@Component({
  selector: 'mia-select-field',
  templateUrl: './select-field.component.html',
  styleUrls: ['./select-field.component.scss']
})
export class SelectFieldComponent extends MiaBaseFieldComponent implements OnInit {

  configuredSubject = false;

  constructor() {
    super();
  }

  ngOnInit() {
    super.ngOnInit();
    this.configSubject();
  }

  onClickNewItem() {
    let subject: Subject<any> = this.field.extra.add_subject;
    subject.next(true);
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
      this.field.extra.options.push(res);
      this.input.setValue(obj.id);
    });

    this.configuredSubject = true;
  }
}