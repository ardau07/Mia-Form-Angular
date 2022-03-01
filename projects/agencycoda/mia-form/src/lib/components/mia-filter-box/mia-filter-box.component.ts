import { MiaQuery } from '@agencycoda/mia-core';
import { Component, EventEmitter, Input, OnInit, Output, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { MatMenuTrigger } from '@angular/material/menu';
import { MiaFilterBoxConfig } from '../../entities/mia-filter-box-config';
import { MiaFilterSelected, MiaFilterType } from '../../entities/mia-filter-type';

@Component({
  selector: 'mia-filter-box',
  templateUrl: './mia-filter-box.component.html',
  styleUrls: ['./mia-filter-box.component.scss']
})
export class MiaFilterBoxComponent implements OnInit {

  @ViewChildren('menuAndOr') menuAndOr!: QueryList<MatMenuTrigger>;
  @ViewChild('addFilterButton') addFilterButton!: MatMenuTrigger;
  @ViewChildren('menuConditional') menuConditional!: QueryList<MatMenuTrigger>;

  @Input() config!: MiaFilterBoxConfig;
  @Input() query!: MiaQuery;

  @Output() execCustom = new EventEmitter<MiaFilterSelected>();
  @Output() call = new EventEmitter<Array<MiaFilterSelected>>();

  /**
   * andOrType: 0 = AND, 1 = OR
   * conditional: 0 = Is, 1 = Is not, 2 = Is set (Si tiene valor), 3 = Is not Set (si no tiene valor)
   * 
   */
  actives: Array<MiaFilterSelected> = [];
  /**
   * Verify if some change
   */
  hasChange = false;

  constructor() { }

  ngOnInit(): void {
    
  }

  onApplyFilters() {
    if(!this.hasChange){
      return;
    }
    // Reset where
    this.query.resetWhere();
    // Process all filters selected
    this.actives.forEach(ac => {
      if(ac.field?.type == MiaFilterType.TYPE_WITHOUT_OPTIONS){
        this.queryWithoutOptions(ac);
      } else if(ac.field?.type == MiaFilterType.TYPE_WRITE){
        this.queryWrite(ac);
      } else if(ac.field?.type == MiaFilterType.TYPE_DATE_RANGE){
        this.queryDateRange(ac);
      } else if(ac.field?.type == MiaFilterType.TYPE_USERS){
        this.queryUsers(ac);
      } else if(ac.field?.type == MiaFilterType.TYPE_OPTIONS){
        this.queryOptions(ac);
      } else if(ac.field?.type == MiaFilterType.TYPE_OPTIONS_SERVICE){
        this.queryOptionsService(ac);
      } else if(ac.field?.type == MiaFilterType.TYPE_OPTIONS_CUSTOM){
        this.queryOptionsCustom(ac);
      }
    });
    this.call.emit(this.actives);
    this.hasChange = false;
  }

  queryWithoutOptions(ac: MiaFilterSelected) {
    this.query.addWhere(ac.field!.key, ac.field?.value);
  }

  queryWrite(ac: MiaFilterSelected) {
    this.query.addWhere(ac.field!.key, ac.field?.value);
  }

  queryDateRange(ac: MiaFilterSelected) {

  }

  queryUsers(ac: MiaFilterSelected) {

  }

  queryOptions(ac: MiaFilterSelected) {
    this.query.addWhere(ac.field!.key, ac.field?.value);
  }

  queryOptionsService(ac: MiaFilterSelected) {

  }

  queryOptionsCustom(ac: MiaFilterSelected) {
    this.execCustom.emit(ac);
  }

  onAddFilter(filter: MiaFilterType) {
    this.hasChange = true;
    this.actives.push({ andOrType: 0, field: filter, conditional: 0 });
    this.addFilterButton.closeMenu();
  }

  onChange() {
    this.hasChange = true;
  }

  onRemoveFilter(index: number) {
    this.hasChange = true;
    this.actives.splice(index, 1);
    if(this.actives.length == 1){
      this.actives[0].andOrType = 0;
    }
  }

  onClearFilters() {
    this.hasChange = true;
    this.actives = [];
    this.onApplyFilters();
  }

  closeAllMenuAndOr() {
    this.menuAndOr.forEach(t => t.closeMenu());
  }

  closeAllMenuConditional() {
    this.menuConditional.forEach(t => t.closeMenu());
  }
}
