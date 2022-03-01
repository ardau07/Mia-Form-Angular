import { Component, OnInit } from '@angular/core';
import { MiaBaseFieldComponent } from '../base-field.component';

@Component({
  selector: 'mia-html-field',
  templateUrl: './html-field.component.html',
  styleUrls: ['./html-field.component.css']
})
export class HtmlFieldComponent extends MiaBaseFieldComponent implements OnInit {

  heightEditor = 250;
  modules = {
    toolbar: [
      [{ header: [1, 2, 3, 4, 5, false] }],
      [ 'bold', 'italic', 'underline', 'strike'],
      [{ 'color': []}, { 'background': [] }],
      [ 'blockquote', 'code-block' ],
      [{ 'list': 'ordered' }, { 'list': 'bullet' }],
      [{ 'align': [] }],
      [ 'image', 'link', 'video' ],
    ]
  }
  theme?: string;

  constructor() {
    super();
  }

  ngOnInit(): void {
    super.ngOnInit();
    this.loadConfig();
  }

  loadConfig() {
    if(this.field.extra.height != undefined){
      this.heightEditor = this.field.extra.height;
    }
    if(this.field.extra.theme != undefined){
      this.theme = this.field.extra.theme;
    }
  }
}
