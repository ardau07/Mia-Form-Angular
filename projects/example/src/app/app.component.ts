import { MiaQuery } from '@agencycoda/mia-core';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { GooglePlacesFieldComponent } from 'projects/agencycoda/mia-form-google-places-field/src/public-api';
import { ImagesFieldComponent } from 'projects/agencycoda/mia-form/src/lib/fields/images-field/images-field.component';
import { PositionFieldComponent } from 'projects/agencycoda/mia-form/src/lib/fields/position-field/position-field.component';
import { SliderFieldComponent } from 'projects/agencycoda/mia-form/src/lib/fields/slider-field/slider-field.component';
import { MiaFormModalV2Component, MiaFormModalV2Config } from 'projects/agencycoda/mia-form/src/lib/modals/mia-form-modal-v2/mia-form-modal-v2.component';
import { BoxFieldComponent, ColorSelectorFieldComponent, MiaField, MiaFilterBoxConfig, MiaFilterSelected, MiaFilterType, MiaFormComponent, MiaFormConfig, MiaFormModalComponent, MiaFormModalConfig, MiaFormModalsService, MiaFormModalV3Config, MiaFormWizardConfig, RowFieldComponent, SizeRadioFieldComponent, SwitchFieldComponent, TabsFieldComponent } from 'projects/agencycoda/mia-form/src/public-api';
import { of, Subject } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { environment } from '../environments/environment';
import { Entity } from './entitiy';
import { ExampleCustomFieldComponent } from './fields/example-custom-field/example-custom-field.component';
import { TestService } from './test.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  @ViewChild('miaForm') miaForm!: MiaFormComponent;

  config!: MiaFormConfig;
  item!: Entity;

  filterBox!: MiaFilterBoxConfig;
  queryFilter!: MiaQuery;

  constructor(
    protected testService: TestService,
    protected dialog: MatDialog,
    protected formModals: MiaFormModalsService
  ) {

  }

  ngOnInit(): void {
    this.loadItem();
    this.loadForm();
    this.loadFilterBox();
    //this.loadFormMarketplace();
  }

  onClickSend() {
    this.miaForm.submit().subscribe(result => {
      console.log('--Observable--');
      console.log(result);
      /*alert(result.margin.top);
      alert(result.margin.right);
      alert(result.margin.bottom);
      alert(result.margin.left);*/
    });
  }

  onChangeDateFilter(result: any) {
    console.log(result);
  }

  onSubmit(item: Entity) {
    console.log('--SUBMIT--');
    console.log(item);
    //alert('asddas');
  }

  loadItem() {
    this.item = new Entity();
    /*this.item.title = 'Noticia titue';
    this.item.subtitle = 'Subitulo';*/
    this.item.firstname = 'Matias';
    this.item.firstname2 = 'Matias Ca';
    this.item.caption = 'asld jasld kjaslkdjaklj dakls jdalkjd aslkdj alkdj aklj dalkajslk jadlsk jakslsd lakj';
    this.item.status = 1;
    this.item.city_id = 1;
    this.item.date = '2021-04-08 04:20:00';
    this.item.tags = ['tag1', 'tag2', 'tag3'];
    this.item.event_start = '2021-07-19 16:00:00';
    this.item.event_end = '2021-07-20 18:00:00';
    this.item.margin = { top: 20, left: 30, bottom: 40, right: 0 };
    this.item.vendors = [
      { id: 1, title: 'Vendor 1' }
    ];
    this.item.file_one = { name: 'File.pdf', url: '', size: 500, mediaLink: '' };
  }

  loadFormMarketplace() {
    this.config = new MiaFormConfig();
    this.config.hasSubmit = false;
    this.config.fields = [
      {
        key: 'box-one', type: MiaField.TYPE_CUSTOM, extra: {
          component: BoxFieldComponent,
          fields: [
            {
              key: 'features', type: MiaField.TYPE_CHIPS_AND_SELECT, label: '', caption: '', extra: {
                title: 'Valores del producto', field_display: 'title',
                options: [
                  { id: 0, title: 'Reciclado' },
                  { id: 1, title: 'Rehusado' },
                  { id: 2, title: 'Sustentable' },
                  { id: 3, title: 'Libre de animal' },
                ]
              }
            },
            { key: '', type: MiaField.TYPE_LABEL, label: 'Marca del producto', classes: 'label-form' },
            { key: 'brand', type: 'string', label: 'Marca del producto' },
            { key: 'caption', type: MiaField.TYPE_TEXT, label: 'Descripcion del producto' },
            {
              key: 'row-one', type: MiaField.TYPE_CUSTOM, extra: {
                component: RowFieldComponent,
                fields: [
                  { key: '', type: MiaField.TYPE_LABEL, label: 'Precio' },
                  { key: '', type: MiaField.TYPE_LABEL, label: 'Categoría' },
                ]
              }
            },
            {
              key: 'row-one', type: MiaField.TYPE_CUSTOM, extra: {
                component: RowFieldComponent,
                fields: [
                  { key: 'price', type: 'string', label: 'Precio' },
                  { key: 'category', type: 'string', label: 'Categoria' },
                ]
              }
            }
          ]
        }
      },
      { key: 'city_id', type: MiaField.TYPE_CITY, label: 'Ciudad', extra: { basePath: 'http://0.0.0.0:8080/' } },
    ];
    this.config.errorMessages = [
      { key: 'required', message: 'The %label% is required.' }
    ];
  }

  loadForm() {
    this.config = new MiaFormConfig();
    this.config.hasSubmit = false;
    this.config.fields = [
      { key: '', type: MiaField.TYPE_LABEL, label: '<h2>-- Photo --</h2>', classes: 'label-custom' },
      { key: 'photo', type: MiaField.TYPE_PHOTO, label: 'Photo', caption: 'Foto del usuario.' },

      { key: '', type: MiaField.TYPE_LABEL, label: '<p><b>Input text (type: "string")</b></p>', },
      { key: 'title', type: 'string', label: 'Title', validators: [Validators.required], caption: 'El titulo de la noticia.' },

      { key: '', type: MiaField.TYPE_LABEL, label: '<p><b>Input autocomplete (type: "MiaField.TYPE_LABEL")</b></p>', },
      {
        key: 'product', type: 'autocomplete', label: 'Write something', extra: {
          options: ['One', 'Two', 'Three']
        }
      },
      { key: '', type: MiaField.TYPE_LABEL, label: '<p><small>Input autocomplete service (type: "autocomplete-service")</small></p>', },
      //{ key: 'vendor', type: 'autocomplete-service', label: 'Write something', extra: { service: this.testService, field_display: 'title', query: new MiaQuery() } },

      /* { key: 'caption', type: 'string' }, */
      /* { key: 'subtitle', type: 'string', }, */

      { key: '', type: MiaField.TYPE_LABEL, label: '<p><b>Input date (type: "date")</b></p>', },
      { key: 'date', type: 'date', label: 'Fecha' },

      { key: '', type: MiaField.TYPE_LABEL, label: '<p><b>Input autocomplete Add element (type: "list-service")</b></p>', },
      //{ key: 'vendors', type: 'list-service', extra: { service: this.testService, field_display: 'title', field_list: 'vendors-auto', query: new MiaQuery() } },

      { key: '', type: MiaField.TYPE_LABEL, label: '<p><b>Text HTML (type: "MiaField.TYPE_LABEL")</b></p>', },
      { key: '', type: MiaField.TYPE_LABEL, label: 'Esto es una <strong>prueba</strong> texto plano sin funcionalidad, admite HTML.', classes: 'label-custom' },

      { key: '', type: MiaField.TYPE_LABEL, label: '<p><b>Input Selector (type: "select")</b></p>', },
      {
        key: 'status', type: 'select', label: 'Select a choice', extra: {
          options: [
            { id: 0, title: 'Status 1' },
            { id: 1, title: 'Status 2' },
            { id: 2, title: 'Status 3' },
          ],
          can_add: true,
          add_title: 'Add new Status',
          add_subject: new Subject<any>().pipe(switchMap(it => of({ id: 3, title: 'Estado 4' })))
        }
      },
      { key: '', type: MiaField.TYPE_LABEL, label: '<p><small>Input Selector service (type: "select-service")</small></p>', },
      //{ key: 'vendor-select', type: 'select-service', label: 'Select a choice', extra: { service: this.testService, field_display: 'title', query: new MiaQuery() } },

      { key: '', type: MiaField.TYPE_LABEL, label: '<p><b>Add users (type: "avatars")</b></p>', },
      //{ key: 'avatars', type: 'avatar-list-service', extra: { service: this.testService, field_display: 'title', field_photo: 'photo', field_list: 'avatars-auto', query: new MiaQuery() } },

      { key: 'data', type: MiaField.TYPE_LIST_STRING, label: 'Items:', caption: '' },
      {
        key: 'chips', type: MiaField.TYPE_CHIPS_AND_SELECT, label: '', caption: '', extra: {
          title: 'State', field_display: 'title',
          options: [
            { id: 0, title: 'State 1' },
            { id: 1, title: 'State 2' },
            { id: 2, title: 'State 3' },
          ]
        }
      },
      { key: 'tag', type: MiaField.TYPE_STRING_WITH_COLOR, label: 'Tag name', caption: '', appearance: 'outline', extra: { key_color: 'color' } },
      { key: 'divider-1', type: MiaField.TYPE_DIVIDER },
      {
        key: 'row-one', type: MiaField.TYPE_CUSTOM, extra: {
          component: RowFieldComponent,
          fields: [
            { key: 'firstname', type: 'string', label: 'Nombre' },
            { key: 'lastname', type: 'string', label: 'Apellido' },
          ]
        }
      },
      { key: 'tags', type: MiaField.TYPE_TAGS, label: 'Tags', caption: '', appearance: 'outline' },
      { key: 'chips-service', type: MiaField.TYPE_CHIPS_AND_SELECT_SERVICE, label: 'Seleccionador multiple chip', caption: '', extra: { title: 'Multiple chips service', service: this.testService, field_display: 'title', field_list: 'chips-auto', query: new MiaQuery(), limit: 2, limit_message_error: 'Ha superado el limite' } },
      {
        key: 'chips-service-with-add', type: MiaField.TYPE_CHIPS_AND_SELECT_SERVICE, label: 'Seleccionador multiple chip', caption: '', extra: {
          title: 'Multiple chips service',
          service: this.testService,
          field_display: 'title',
          field_list: 'chips-auto',
          query: new MiaQuery(),
          can_add: true,
          add_title: 'Add new Status',
          add_subject: new Subject<any>().pipe(switchMap(it => of({ id: 30, title: 'Estado 4' })))
        }
      },
      { key: 'content-html', type: MiaField.TYPE_HTML, label: 'Contenido del post', caption: '', extra: { height: 400 } },
      { key: 'title-header', type: MiaField.TYPE_STRING_TITLE, placeholder: 'Write your title', caption: '' },
      { key: 'photo-header', type: MiaField.TYPE_PHOTO_HEADER, label: 'Photo Header', caption: 'Foto del header.', extra: { saveObj: true } },
      { key: 'event_start', type: MiaField.TYPE_EVENT, label: 'Fecha del evento', extra: { field_end_key: 'event_end' } },
      { key: 'custom_example', type: MiaField.TYPE_CUSTOM, extra: { component: ExampleCustomFieldComponent } },
      { key: 'file_one', type: MiaField.TYPE_FILE_ONE, label: 'Propuesta' },
      { key: 'input-with-chips', type: MiaField.TYPE_INPUT_WITH_CHIP_SERVICE, label: 'Escribir chips', caption: '', extra: { title: 'Escribir chips', service: this.testService, field_display: 'title', field_list: 'chips-auto', query: new MiaQuery() } },
      {
        key: 'tabs-one', type: MiaField.TYPE_CUSTOM, extra: {
          component: TabsFieldComponent,
          tabs: [
            {
              title: 'Tab One', fields: [
                { key: 'firstname2', type: 'string', label: 'Nombre' },
                { key: 'lastname2', type: 'string', label: 'Apellido' },
              ]
            },
            {
              title: 'Tab Two', fields: [
                { key: 'address', type: 'string', label: 'Address' },
                { key: 'testing-two', type: 'string', label: 'Testing Two' },
              ]
            }
          ]
        }
      },

      { key: '', type: MiaField.TYPE_LABEL, label: '<h2>-- Position Field --</h2>', classes: 'label-custom' },
      { key: 'margin', type: MiaField.TYPE_CUSTOM, extra: { component: PositionFieldComponent } },
      { key: 'switch', type: MiaField.TYPE_CUSTOM, label: 'Display source code', extra: { component: SwitchFieldComponent } },
      { key: 'color_primary', type: MiaField.TYPE_CUSTOM, label: 'Color Primary', extra: { component: ColorSelectorFieldComponent, colors: ['#000', '#333', '#eee', '#ddd'] } },
      { key: 'slider_percent', type: MiaField.TYPE_CUSTOM, label: 'Test Percent', extra: { component: SliderFieldComponent } },
      { key: 'photos', type: MiaField.TYPE_CUSTOM, label: 'Photos', extra: { component: ImagesFieldComponent, limit: 5 } },
      { key: 'section_height', type: MiaField.TYPE_CUSTOM, label: 'Section Height', extra: { component: SizeRadioFieldComponent, key_custom: 'section_height_custom', class_name: 'section', default_value: 'section-large' } },
      { key: '', type: MiaField.TYPE_LABEL, label: '<h2>-- Google Maps --</h2>', classes: 'label-custom' },
      { key: 'address_google', type: MiaField.TYPE_CUSTOM, label: 'Address', extra: { component: GooglePlacesFieldComponent, key_latitude: 'latitude', key_longitude: 'longitude' } },
    ];
    this.config.errorMessages = [
      { key: 'required', message: 'The %label% is required.' }
    ];
  }

  onClickOpenForm() {
    let data = new MiaFormModalConfig();
    data.item = this.item;
    data.titleNew = 'Settings';
    data.titleEdit = 'Settings';
    data.showButtons = false;

    let config = new MiaFormConfig();
    config.hasSubmit = false;
    config.fields = [
      { key: 'firstname', type: 'string', label: 'Nombre' },
      { key: 'lastname', type: 'string', label: 'Apellido' },
    ];
    config.errorMessages = [
      { key: 'required', message: 'The "%label%" is required.' }
    ];

    data.config = config;

    return this.dialog.open(MiaFormModalComponent, {
      width: '500px',
      panelClass: 'modal-full-width-mobile',
      data: data
    }).afterClosed();
  }

  onClickOpenFormV2() {
    let data = new MiaFormModalV2Config();
    data.item = this.item;
    data.title = 'Settings V2';

    let config = new MiaFormConfig();
    config.hasSubmit = false;
    config.fields = [
      { key: 'firstname', type: 'string', label: 'Nombre' },
      { key: 'lastname', type: 'string', label: 'Apellido' },
    ];
    config.errorMessages = [
      { key: 'required', message: 'The "%label%" is required.' }
    ];

    data.config = config;

    let dialogRef = this.dialog.open(MiaFormModalV2Component, {
      width: '500px',
      panelClass: 'modal-full-width-mobile',
      data: data
    });
    dialogRef.componentInstance.processing.subscribe(item => {
      console.log(item);
      //alert('Procesando');
      dialogRef.componentInstance.setErrorMessage('Problema no resuelto');
      //dialogRef.close();
    });
  }

  onClickOpenFormV3() {
    let config = new MiaFormModalV3Config();
    config.item = this.item;
    config.title = 'Page Settings';
    config.tabs = [
      {
        title: 'General', fields: [
          { key: 'firstname', type: 'string', label: 'Nombre' },
          { key: 'lastname', type: 'string', label: 'Apellido' },
        ]
      },
      {
        title: 'SEO', fields: [
          { key: 'photo', type: MiaField.TYPE_PHOTO, label: 'Photo', caption: 'Foto del usuario.' },
        ]
      },
      {
        title: 'Advanced', fields: [
          { key: 'email', type: MiaField.TYPE_EMAIL, label: 'Email' },
        ]
      },
    ];

    this.formModals.openV3(config).subscribe(res => {
      console.log(res);
      res.modal.stopSending();
      res.modal.close();
    });
  }

  onClickOpenFormWizard() {
    let config = new MiaFormWizardConfig();
    config.item = this.item;
    config.title = 'Page Settings';
    config.tabs = [
      {
        title: 'General', fields: [
          { key: 'firstname', type: 'string', label: 'Nombre' },
          { key: 'lastname', type: 'string', label: 'Apellido' },
        ]
      },
      {
        title: 'SEO', fields: [
          { key: 'photo', type: MiaField.TYPE_PHOTO, label: 'Photo', caption: 'Foto del usuario.' },
        ]
      },
      {
        title: 'Advanced', fields: [
          { key: 'email', type: MiaField.TYPE_EMAIL, label: 'Email' },
        ]
      },
    ];

    this.formModals.openWizard(config).subscribe(res => {
      console.log(res);
      res.modal.stopSending();
      res.modal.close();
    });
  }

  onFilterCustom(ac: MiaFilterSelected) {

  }

  loadFilterBox() {
    this.queryFilter = new MiaQuery();

    this.filterBox = new MiaFilterBoxConfig();
    this.filterBox.filters = [
      { key: 'title', title: 'Title', type: MiaFilterType.TYPE_WRITE },
      {
        key: 'status', title: 'Status', value: 1, type: MiaFilterType.TYPE_OPTIONS, options: [
          { id: 0, title: 'State 1' },
          { id: 1, title: 'State 2' },
          { id: 2, title: 'State 3' },
        ]
      },
      { key: 'status', title: 'Status is closed', value: 1, type: MiaFilterType.TYPE_WITHOUT_OPTIONS },
      {
        key: 'deadline', title: 'Deadline', value: 0, type: MiaFilterType.TYPE_OPTIONS_CUSTOM, options: [
          { id: 0, title: 'Ultimo mes' },
          { id: 1, title: 'Ultima semana' },
          { id: 2, title: 'Ultimo año' },
          { id: 3, title: 'Ultimos 6 meses' },
        ]
      },
      {
        key: 'amount', title: 'Amount', value: 0, type: MiaFilterType.TYPE_OPTIONS_CUSTOM, options: [
          { id: 0, title: '15000USD o menos' },
          { id: 1, title: '15001USD a 30000USD' },
          { id: 2, title: '30001 a 50000USD' },
          { id: 3, title: '50000 a 100000USD' },
          { id: 4, title: '100.000+' },
        ]
      },
    ];
  }
}
