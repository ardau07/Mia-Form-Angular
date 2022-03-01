import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { MiaFormModalV3Config, MiaFormModalV3Interaction, MiaFormModalV3Component } from '../modals/mia-form-modal-v3/mia-form-modal-v3.component';
import { MiaFormWizardComponent, MiaFormWizardConfig, MiaFormWizardInteraction } from '../modals/mia-form-wizard/mia-form-wizard.component';

@Injectable({
  providedIn: 'root'
})
export class MiaFormModalsService {

  constructor(
    protected dialog: MatDialog
  ) { }

  openV3(config: MiaFormModalV3Config): Observable<MiaFormModalV3Interaction> {
    let dialogRef = this.dialog.open(MiaFormModalV3Component, {
      width: '900px',
      panelClass: ['modal-full-width-mobile', 'modal-settings-page'],
      data: config
    });
    return dialogRef.componentInstance.actions;
  }

  openWizard(config: MiaFormWizardConfig): Observable<MiaFormWizardInteraction> {
    let dialogRef = this.dialog.open(MiaFormWizardComponent, {
      width: '900px',
      panelClass: ['modal-full-width-mobile', 'modal-settings-page'],
      data: config
    });
    return dialogRef.componentInstance.actions;
  }
}
