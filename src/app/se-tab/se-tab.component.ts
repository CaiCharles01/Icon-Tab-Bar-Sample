import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {IconTabBarComponent, TabConfig, TextTypePopoverComponent} from '@fundamental-ngx/platform/icon-tab-bar';
import {cloneDeep} from 'lodash-es';
import {textTypeConfig} from '../config-for-examples/long-icon-type-config';

@Component({
  selector: 'app-se-tab',
  standalone: true,
  imports: [IconTabBarComponent, TextTypePopoverComponent],
  templateUrl: './se-tab.component.html',
  styleUrl: './se-tab.component.css'
})
export class SeTabComponent implements OnInit, OnChanges {
  @Input()
  textTypeLayoutMode: 'row' | 'column' = 'row';

  @Input()
  enableTabReordering = false;

  @Input()
  withOverflowExample = false;

  @Input()
  nested = false;

  @Input()
  numTabsDisplayed: number = 0;

  items: TabConfig[] = [];

  extraItems: TabConfig[];

  ngOnInit(): void {
    console.log(this.enableTabReordering);
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['numTabsDisplayed']) {
      console.log('debugging', this.numTabsDisplayed);
      if (this.numTabsDisplayed) {
        this.items = cloneDeep(textTypeConfig).slice(0, this.numTabsDisplayed);
        this.extraItems = cloneDeep(textTypeConfig).slice(this.numTabsDisplayed);
      } else {
        this.items = cloneDeep(textTypeConfig);
      }
    }
  }
}
