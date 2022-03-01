import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MiaFormConfig } from '../../entities/mia-form-config';
import { MiaFormComponent } from '../../components/mia-form/mia-form.component';
import { Subject } from 'rxjs';

export class MiaFormModalV2Config {
  service: any;
  item: any;
  config!: MiaFormConfig;
  title = '';
}

@Component({
  selector: 'lib-mia-form-modal-v2',
  templateUrl: './mia-form-modal-v2.component.html',
  styleUrls: ['./mia-form-modal-v2.component.scss']
})
export class MiaFormModalV2Component implements OnInit {

  @ViewChild('miaForm') miaForm!: MiaFormComponent;

  isSending = false;

  processing = new Subject<any>();
  errorMessage = '';

  constructor(
    protected dialogRef: MatDialogRef<MiaFormModalV2Component>,
    @Inject(MAT_DIALOG_DATA) public data: MiaFormModalV2Config
  ) { }

  ngOnInit(): void {
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
      this.processing.next(item)
    }

  }

  close() {
    this.dialogRef.close();
  }

  stopSending(){
    this.isSending = false;
  }
  
  setErrorMessage(error: string) {
    this.errorMessage = error;
    this.isSending = false;
  }

  cleanErrors() {
    this.errorMessage = '';
  }

  onClickSave() {
    this.miaForm.submit().subscribe(result => {
      this.save(result);
    });
  }
}
