import React from 'react';
import Table from "../../lib/table/table";
import { useTranslation } from 'react-i18next';
import TPagination from "../../lib/table/tpagination";
import Button from '../../lib/button/button';

const TableExample = () => {
    const { t } = useTranslation();
    const columns = [
        {
            label: t('name'),
            key: 'name',
            width: 140,
        },
        {
            label: t('age'),
            key: 'age',
        },
        {
            label: t('gender'),
            key: 'gender',
        },
        {
            label: t('render'),
            key: 'render',
            render: (rowData: {id: string}) => {
                const onClick = (rowData: {id: string}) => {
                    console.log(rowData.id);
                    alert('click' + rowData.id)
                };
                return (
                    <Button onClick={() => onClick(rowData)} theme={'default'} size={'normal'} disabled={false} type={'button'}>按钮</Button>
                )
            }
        },
        {
            label: t('action'),
            key: 'action',
            actions: [
                {
                    title: t('action'),
                    callback: function(param: {id: string}) {
                        alert('action: ' + param.id)
                    }
                },
                {
                    title: t('delete'),
                    callback: function(param: {id: string}) {
                        alert('delete: ' + param.id)
                    }
                }
            ]
        }
    ]
    const source = [
        {
            id: 1,
            name: 'frankfrankfrankfrankfrankfrankefrankefrankefrankefrankefranke',
            age: 18,
            gender: 'male',
        },
        {
            id: 2,
            name: 'mary',
            age: 20,
            gender: 'male',
        },
        {
            id: 3,
            name: 'leo',
            age: 1,
            gender: 'male',
        },
        {
            id: 4,
            name: 'may',
            age: 1,
            gender: 'male',
        },
        {
            id: 1,
            name: 'frankfrankfrankfrankfrankfrankefrankefrankefrankefrankefranke',
            age: 18,
            gender: 'male',
        },
        {
            id: 2,
            name: 'mary',
            age: 20,
            gender: 'male',
        },
        {
            id: 3,
            name: 'leo',
            age: 1,
            gender: 'male',
        },
        {
            id: 4,
            name: 'may',
            age: 1,
            gender: 'male',
        },
    ];
    return (
        <div>
            {t('table_simple')}
            <Table data={source} columns={columns}/>
            <TPagination/>
        </div>
    )
}

export default TableExample
