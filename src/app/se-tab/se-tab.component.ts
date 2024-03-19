import {ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnChanges, OnInit, SimpleChanges, ViewChild} from '@angular/core';
import {IconTabBarComponent, IconTabBarItem, TabConfig, TextTypePopoverComponent, IconTabBarTabComponent} from '@fundamental-ngx/platform/icon-tab-bar';
import {cloneDeep} from 'lodash-es';
import {AsyncPipe, JsonPipe, NgClass} from '@angular/common';
import {Tab} from '../config-for-examples/tab';

@Component({
  selector: 'app-se-tab',
  standalone: true,
  imports: [IconTabBarComponent, TextTypePopoverComponent, AsyncPipe, IconTabBarTabComponent, NgClass, JsonPipe],
  changeDetection: ChangeDetectionStrategy.OnPush,
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

  @Input()
  tabList: Tab[] = [];

  public selectedTab: any;

  items: TabConfig[] = [];

  extraTabs: IconTabBarItem[];

  constructor(private cdr: ChangeDetectorRef) {
  }

  ngOnInit(): void {
    this.selectedTab = this.tabList[0];
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['numTabsDisplayed']) {
      if (this.numTabsDisplayed) {
        this.extraTabs = this.tabList.slice(this.numTabsDisplayed).map((tab, index, _tabs) => {
          return {
            ...tab,
            label: tab.title,
            index: index,
            uId: tab.id,
            flatIndex: index,
            cssClasses: [],
          };
        });
        this.tabList = this.tabList.slice(0, this.numTabsDisplayed);
      }
    }
  }

  onTabSelect(event: any): void {
    console.log('onTabSelect', event);
    this.selectedTab = event;
  }

  onMoreTabsClick(event: any): void {
    console.log('onMoreTabsClick', event);
    const finalTab = this.tabList.pop();
    this.extraTabs[event.index] = {
      ...finalTab,
      label: finalTab.title,
      index: event.index,
      uId: finalTab.id,
      flatIndex: event.index,
      cssClasses: [],
    };
    this.tabList.push(event);
    this.selectedTab = event;
  }
}
