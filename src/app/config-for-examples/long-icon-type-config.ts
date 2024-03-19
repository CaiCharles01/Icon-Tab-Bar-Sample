import {TabConfig} from '@fundamental-ngx/platform/icon-tab-bar';
import {Tab} from './tab';

export const tabLists: Tab[] = [
    {
        title: 'Item 0',
        id: "1",
    },
    {
        title: 'Item 1',
        id: "2"
    },
    {
        title: 'Item 2',
        id: "3",
        hasErrors: true
    },
    {
        title: 'Item 3',
        id: "4",
        disabled: true
    },
    {
        title: 'Item 4',
        id: "5"
    },
    {
        title: 'Item 5',
        id: "6"
    },
    {
        title: 'Item 6',
        id: "7"
    },
    {
        title: 'Item 7',
        id: "8"
    },
    {
        title: 'Item 8',
        id: "9",
        hasErrors: true
    },
    {
        title: 'Item 9',
        id: "10"
    }
];

export const longTextTypeConfig: TabConfig[] = [
    {
        label: 'Item 10',
        counter: 70,
        color: 'critical',
        subItems: [
            {
                label: 'Item 0',
                counter: null,
                color: 'critical'
            },
            {
                label: 'Item 1',
                counter: null,
                color: null
            },
            {
                label: 'Item 2',
                counter: null,
                color: null
            }
        ]
    },
    {
        label: 'Item 11',
        counter: 41,
        color: null
    },
    {
        label: 'Item 12',
        counter: 30,
        color: 'positive'
    },
    {
        label: 'Item 13',
        counter: 95,
        color: null
    },
    {
        label: 'Item 14',
        counter: 32,
        color: null
    },
    {
        label: 'Item 15',
        counter: 49,
        color: 'critical'
    },
    {
        label: 'Item 16',
        counter: 41,
        color: null
    },
    {
        label: 'Item 17',
        counter: 66,
        color: null
    }
];