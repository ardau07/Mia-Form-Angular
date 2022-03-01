import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Subject } from 'rxjs';
import { MiaFormComponent } from '../../components/mia-form/mia-form.component';
import { MiaField } from '../../entities/mia-field';
import { MiaFormConfig } from '../../entities/mia-form-config';

export class MiaFormModalV3Config {
  service: any;
  item: any;
  tabs: Array<{ title: string, fields: Array<MiaField> }> = [];
  title = '';
}

export class MiaFormModalV3Interaction {
  action: string = '';
  item: any;
  extras?: any;
  modal!: MiaFormModalV3Component;
}

@Component({
  selector: 'mia-form-modal-v3',
  templateUrl: './mia-form-modal-v3.component.html',
  styleUrls: ['./mia-form-modal-v3.component.scss']
})
export class MiaFormModalV3Component implements OnInit {

  @ViewChild('miaForm') miaForm!: MiaFormComponent;

  isSending = false;

  sectionSelectedIndex = 0;
  configForm?: MiaFormConfig;
  errorMessage = '';

  actions = new Subject<MiaFormModalV3Interaction>();

  constructor(
    protected dialogRef: MatDialogRef<MiaFormModalV3Component>,
    @Inject(MAT_DIALOG_DATA) public data: MiaFormModalV3Config
  ) { }

  ngOnInit(): void {
    this.onClickTab(this.data.tabs[0], 0);
  }

  processWithBaseService(item: any) {
    let serviceSave: Promise<any> = this.data.service.save(item);
    serviceSave.then(result => {
      this.dialogRef.close(result);
      this.isSending = false;
    }).catch(error => {
      this.isSending = false;
    });
  }

  save(item: any) {
    if(this.isSending){
      return;
    }

    this.isSending = true;

    if (this.data.service != undefined) {
      this.processWithBaseService(item);
    } else {
      this.actions.next({ action: 'save', item: item, modal: this })
    }

  }

  onClickSave() {
    this.miaForm.submit().subscribe(result => {
      this.save(result);
    });
  }

  onClickTab(tab: { title: string, fields: Array<MiaField> }, index: number) {
    if(this.configForm != undefined){
      this.miaForm.updateItemByForm();
    }

    let config = new MiaFormConfig();
    config.hasSubmit = false;
    config.fields = tab.fields;
    config.service = this.data.service;
    this.configForm = config;

    this.sectionSelectedIndex = index;
  }

  close() {
    this.dialogRef.close();
  }

  setErrorMessage(error: string) {
    this.errorMessage = error;
    this.isSending = false;
  }

  cleanErrors() {
    this.errorMessage = '';
  }

  stopSending(){
    this.isSending = false;
  }
}
