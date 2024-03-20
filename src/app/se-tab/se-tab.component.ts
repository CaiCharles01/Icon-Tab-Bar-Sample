import {ChangeDetectionStrategy, ChangeDetectorRef, Component, DoCheck, Input, OnChanges, OnInit, SimpleChanges, ViewChild} from '@angular/core';
import {IconTabBarComponent, IconTabBarItem, TabConfig, TextTypePopoverComponent, IconTabBarTabComponent} from '@fundamental-ngx/platform/icon-tab-bar';
import {cloneDeep, isEqual} from 'lodash-es';
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
export class SeTabComponent implements OnInit, DoCheck {
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
  tabList: Tab[] = [];

  public selectedTab: any;

  items: TabConfig[] = [];

  extraTabs: IconTabBarItem[];

  private previousHasErrors: boolean[];

  constructor(private cdr: ChangeDetectorRef) {
  }

  ngOnInit(): void {
    this.selectedTab = this.tabList[0];
    this.generateTabConfig();
    this.previousHasErrors = this.tabList.map((tab) => tab.hasErrors);
  }

  ngDoCheck(): void {
    const currentHasErrors = this.tabList.map((tab) => tab.hasErrors);
    if (!isEqual(this.previousHasErrors, currentHasErrors)) {
      this.generateTabConfig();
      this.cdr.detectChanges();
      this.previousHasErrors = cloneDeep(currentHasErrors);
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

  private generateTabConfig(): void {
    this.items = this.tabList.map((tab) => {
      return {
        id: tab.id,
        label: tab.title,
        color: tab.hasErrors ? 'negative' : null,
        active: this.selectedTab?.id === tab.id,
        badge: tab.hasErrors
      };
    })
  }
}
