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
            label: t('action'),
            key: 'render',
            render: () => {
                const onClick = () => {
                    alert('click')
                }
                return (
                    <Button onClick={() => {onClick()}} theme={'default'} size={'normal'} disabled={false} type={'button'}>按钮</Button>
                )
            }
        }
    ]
    const source = [
        {
            id: 1,
            name: 'frank',
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
        }
    ];
    return (
        <div style={{width: '800px'}}>
            {t('table_simple')}
            <Table data={source} columns={columns}/>
            <TPagination/>
        </div>
    )
}

export default TableExample
