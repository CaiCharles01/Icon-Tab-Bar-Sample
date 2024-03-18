import {TabConfig} from '@fundamental-ngx/platform/icon-tab-bar';

export const textTypeConfig: TabConfig[] = [
    {
        label: 'Item 0',
    },
    {
        label: 'Item 1',
    },
    {
        label: 'Item 2',
    },
    {
        label: 'Item 3',
    },
    {
        label: 'Item 4',
    },
    {
        label: 'Item 5',
    },
    {
        label: 'Item 6',
    },
    {
        label: 'Item 7',
    },
    {
        label: 'Item 8',
    },
    {
        label: 'Item 9',
    }
];

export const longTextTypeConfig: TabConfig[] = [
    ...textTypeConfig,
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