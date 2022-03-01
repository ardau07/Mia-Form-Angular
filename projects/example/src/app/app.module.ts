import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MiaFormModule } from 'projects/agencycoda/mia-form/src/public-api';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { QuillModule } from 'ngx-quill';
import { ExampleCustomFieldComponent } from './fields/example-custom-field/example-custom-field.component';
import { MIA_GOOGLE_STORAGE_PROVIDER } from '@agencycoda/mia-core';
import { MatButtonModule } from '@angular/material/button';
import { MiaFormGooglePlacesFieldModule } from 'projects/agencycoda/mia-form-google-places-field/src/public-api';
import { GooglePlaceModule } from 'ngx-google-places-autocomplete';

@NgModule({
  declarations: [
    AppComponent,
    ExampleCustomFieldComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MiaFormModule,
    MiaFormGooglePlacesFieldModule,
    QuillModule.forRoot(),
    BrowserAnimationsModule,
    MatButtonModule
  ],
  providers: [
    {
      provide: MIA_GOOGLE_STORAGE_PROVIDER,
      useValue: {
        bucket: 'yoypr-files'
      }
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
