import { Component, ComponentFactoryResolver, ElementRef, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { MiaBaseFieldComponent } from '../base-field.component';

@Component({
  selector: 'mia-custom-field',
  templateUrl: './custom-field.component.html',
  styleUrls: ['./custom-field.component.scss']
})
export class CustomFieldComponent extends MiaBaseFieldComponent implements OnInit {

  @ViewChild('contentColumn') contentColumn?: ElementRef;

  constructor(
    protected factoryResolver: ComponentFactoryResolver,
    protected viewContainerRef: ViewContainerRef
  ) {
    super();
  }

  ngOnInit(): void {
    this.generateComponent();
  }

  generateComponent() {
    const component = this.factoryResolver.resolveComponentFactory(this.field.extra.component);
    
    const view = this.viewContainerRef.createComponent(component);
    (<MiaBaseFieldComponent>view.instance).field = this.field;
    (<MiaBaseFieldComponent>view.instance).group = this.group;
  }
}
