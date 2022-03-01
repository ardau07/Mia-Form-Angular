import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import { MiaField } from '../../entities/mia-field';
import { MiaFormComponent } from '../../components/mia-form/mia-form.component';
import { Subject } from 'rxjs';
import { MiaFormConfig } from '../../entities/mia-form-config';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

export class MiaFormWizardConfig {
  service: any;
  item: any;
  tabs: Array<{ title: string, fields: Array<MiaField> }> = [];
  title = '';
}

export class MiaFormWizardInteraction {
  action: string = '';
  item: any;
  extras?: any;
  modal!: MiaFormWizardComponent;
}

@Component({
  selector: 'mia-form-wizard',
  templateUrl: './mia-form-wizard.component.html',
  styleUrls: ['./mia-form-wizard.component.scss']
})
export class MiaFormWizardComponent implements OnInit {

  @ViewChild('miaForm') miaForm!: MiaFormComponent;

  isSending = false;

  sectionSelectedIndex = 0;
  configForm?: MiaFormConfig;
  errorMessage = '';

  actions = new Subject<MiaFormWizardInteraction>();

  constructor(
    protected dialogRef: MatDialogRef<MiaFormWizardComponent>,
    @Inject(MAT_DIALOG_DATA) public data: MiaFormWizardConfig
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

  onClickContinue() {
    this.sectionSelectedIndex++;
    this.onClickTab(this.data.tabs[this.sectionSelectedIndex], this.sectionSelectedIndex);
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
