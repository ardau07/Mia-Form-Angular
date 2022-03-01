import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { GooglePlaceModule } from 'ngx-google-places-autocomplete';
import { GooglePlacesFieldComponent } from './fields/google-places-field/google-places-field.component';



@NgModule({
  declarations: [
    GooglePlacesFieldComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    GooglePlaceModule,
    /** MATERIAL */
    MatFormFieldModule,
    MatInputModule,
  ],
  exports: [
    GooglePlacesFieldComponent,
    GooglePlaceModule
  ]
})
export class MiaFormGooglePlacesFieldModule { }
