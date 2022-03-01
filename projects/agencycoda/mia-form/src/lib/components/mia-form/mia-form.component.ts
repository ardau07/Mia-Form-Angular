import { AfterViewInit, ChangeDetectionStrategy, ChangeDetectorRef, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Observable, of } from 'rxjs';
import { MiaFormConfig } from '../../entities/mia-form-config';
import { MiaFormService } from '../../mia-form.service';

@Component({
  selector: 'mia-form',
  templateUrl: './mia-form.component.html',
  styleUrls: ['./mia-form.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MiaFormComponent implements OnInit, AfterViewInit {

  @Input() config = new MiaFormConfig();
  @Input() item: any;

  @Output() save = new EventEmitter<any>();

  group: FormGroup = new FormGroup({});

  constructor(
    protected changeDetector: ChangeDetectorRef,
    protected miaFormService: MiaFormService
  ) { }

  ngOnInit(): void {
     
  }

  ngAfterViewInit(): void {
    this.updateValuesToItem();
    this.changeDetector.detectChanges();
  }

  updateValuesToItem() {
    this.miaFormService.updateValuesByItem(this.config, this.group, this.item);
    this.changeDetector.detectChanges();
  }

  updateItemByForm() {
    this.miaFormService.updateItemByForm(this.config, this.group, this.item)
  }

  getErrors() {
    return this.miaFormService.getErrors(this.config, this.group);
  }

  send() {
    this.onSubmit();
  }

  submit(): Observable<any> {
    if(!this.group.valid){
      return of();
    }
    return of(this.miaFormService.updateItemByForm(this.config, this.group, this.item));
  }

  onSubmit() {
    this.save.emit(this.miaFormService.updateItemByForm(this.config, this.group, this.item));
  }
}
