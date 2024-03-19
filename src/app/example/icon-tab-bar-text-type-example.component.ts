import {Component} from '@angular/core';

import {SeTabComponent} from '../se-tab/se-tab.component';
import {tabLists} from '../config-for-examples/long-icon-type-config';

@Component({
    selector: 'fd-icon-tab-bar-text-type-example',
    templateUrl: './icon-tab-bar-text-type-example.component.html',
    standalone: true,
    imports: [SeTabComponent]
})
export class PlatformIconTabBarTextTypeExampleComponent {
    tabLists = tabLists;
}