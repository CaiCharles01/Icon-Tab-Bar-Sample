import {Component} from '@angular/core';
import {FormsModule} from '@angular/forms';

import {SeTabComponent} from '../se-tab/se-tab.component';
import {tabLists} from '../config-for-examples/long-icon-type-config';

@Component({
    selector: 'fd-icon-tab-bar-text-type-example',
    templateUrl: './icon-tab-bar-text-type-example.component.html',
    standalone: true,
    imports: [SeTabComponent, FormsModule]
})
export class PlatformIconTabBarTextTypeExampleComponent {
    tabLists = tabLists;
    public inputValue = '';

    handleSubmit(value: any): void {
        const indexes = value['inputValue'].split(',').map((item: string) => parseInt(item, 10));
        indexes.forEach((index: number) => {
            this.tabLists[index].hasErrors = true;
        });
        console.log(this.tabLists);
    }
}