import {Component, Input, OnChanges, OnInit, SimpleChanges, ViewChild} from '@angular/core';
import {IconTabBarComponent, TabConfig, TextTypePopoverComponent} from '@fundamental-ngx/platform/icon-tab-bar';
import {cloneDeep} from 'lodash-es';
import {textTypeConfig} from '../config-for-examples/long-icon-type-config';
import {AsyncPipe} from '@angular/common';

@Component({
  selector: 'app-se-tab',
  standalone: true,
  imports: [IconTabBarComponent, TextTypePopoverComponent, AsyncPipe],
  templateUrl: './se-tab.component.html',
  styleUrl: './se-tab.component.css'
})
export class SeTabComponent implements OnInit, OnChanges {
  @ViewChild('fdpIconTabBar') _fdpIconTabBar: IconTabBarComponent;

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

  public selectedTab: any;

  items: TabConfig[] = [];

  extraItems: TabConfig[];

  ngOnInit(): void {
    this.selectedTab = this.items[0];
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['numTabsDisplayed']) {
      if (this.numTabsDisplayed) {
        this.items = cloneDeep(textTypeConfig).slice(0, this.numTabsDisplayed);
        this.extraItems = cloneDeep(textTypeConfig).slice(this.numTabsDisplayed);
      } else {
        this.items = cloneDeep(textTypeConfig);
      }
    }
  }

  onTabSelect(event: any): void {
    this.selectedTab = event;
  }

  onMoreTabsClick(event: any): void {
    console.log('onMoreTabsClick', event);
    const clickTabIndex = this.extraItems.findIndex((item) => item.label === event.label);
    if (clickTabIndex === -1) {
      throw new Error('Tab item not found');
    }
    this.extraItems[clickTabIndex] = this.items[this.items.length - 1];
    const newItems = cloneDeep(this.items);
    newItems[newItems.length - 1] = event;
    event.active = true;
    this.items = newItems;
    this.selectedTab = event;
  }
}
