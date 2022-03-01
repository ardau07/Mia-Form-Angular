import { MiaBaseCrudHttpService } from '@agencycoda/mia-core';
import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Observable, Subject } from 'rxjs';
import { MiaFormComponent } from '../../components/mia-form/mia-form.component';
import { MiaFormConfig } from '../../entities/mia-form-config';

export class MiaFormModalConfig {
  service: any;
  item: any;
  config!: MiaFormConfig;
  titleNew = '';
  titleEdit = '';
  nextProcess?: Subject<any>;
  resultProcess?: Observable<boolean>;
  showButtons = true;
  showHeader = true;

  textButtonCancel? = 'Cancel';
  textButtonSave? = 'Save';
}

@Component({
  selector: 'lib-mia-form-modal',
  templateUrl: './mia-form-modal.component.html',
  styleUrls: ['./mia-form-modal.component.scss']
})
export class MiaFormModalComponent implements OnInit {

  @ViewChild('miaForm') miaForm!: MiaFormComponent;

  isSending = false;
  isShowButtons = true;
  isShowHeader = true;

  constructor(
    protected dialogRef: MatDialogRef<MiaFormModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: MiaFormModalConfig
  ) { }

  ngOnInit(): void {
    this.isShowHeader = this.data.showHeader;
    this.isShowButtons = this.data.showButtons;
    if(this.isShowButtons == false){
      this.dialogRef.beforeClosed().subscribe(res => {
        this.miaForm.submit().subscribe();
      });
    }
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

  processWithInternal(item: any) {
    this.data.nextProcess!.next(item);
    this.data.resultProcess?.subscribe(result => {
      if(result){
        this.dialogRef.close(result);
      }
      this.isSending = false;
    }, error => {
      this.isSending = false;
    });
  }

  save(item: any) {
    if(this.isSending){
      return;
    }

    this.isSending = true;

    if(this.data.nextProcess != undefined && this.data.resultProcess != undefined){
      this.processWithInternal(item);
    } else if (this.data.service != undefined) {
      this.processWithBaseService(item);
    } else {
      this.dialogRef.close(item);
    }

  }

  onClickSave() {
    this.miaForm.submit().subscribe(result => {
      this.save(result);
    });
  }
}
