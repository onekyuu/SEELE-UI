import React from 'react';
import Table from "../../lib/table/table";
import { useTranslation } from 'react-i18next';
// import TPagination from "../../lib/table/tpagination";
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
            width: 140,
        },
        {
            label: t('gender'),
            key: 'gender',
            width: 140,
        },
        {
            label: t('address'),
            key: 'address',
            width: 300,
        },
        {
            label: t('render'),
            key: 'render',
            render: (rowData: {id: string}) => {
                const onClick = (rowData: {id: string}) => {
                    console.log(rowData.id);
                    alert('click id: ' + rowData.id)
                };
                return (
                    <Button onClick={() => onClick(rowData)} theme={'default'} size={'normal'} disabled={false} type={'button'}>按钮</Button>
                )
            },
            width: 140,
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
            ],
            width: 140,
        }
    ]
    const source = [
        {
            id: 1,
            name: 'frank',
            age: 18,
            gender: 'male',
            address: '上海市普陀区金沙江路 1518 弄',
        },
        {
            id: 2,
            name: 'mary',
            age: 20,
            gender: 'male',
            address: '上海市普陀区金沙江路 1518 弄',
        },
        {
            id: 3,
            name: 'leo',
            age: 1,
            gender: 'male',
            address: '上海市普陀区金沙江路 1518 弄',
        },
        {
            id: 4,
            name: 'may',
            age: 1,
            gender: 'male',
            address: '上海市普陀区金沙江路 1518 弄',
        },
        {
            id: 1,
            name: 'frank',
            age: 18,
            gender: 'male',
            address: '上海市普陀区金沙江路 1518 弄',
        },
        {
            id: 2,
            name: 'mary',
            age: 20,
            gender: 'male',
            address: '上海市普陀区金沙江路 1518 弄',
        },
        {
            id: 3,
            name: 'leo',
            age: 1,
            gender: 'male',
            address: '上海市普陀区金沙江路 1518 弄',
        },
        {
            id: 4,
            name: 'may',
            age: 1,
            gender: 'male',
            address: '上海市普陀区金沙江路 1518 弄',
        },
    ];
    return (
        <div style={{marginBottom: '30px'}}>
            {t('table_simple')}
            <Table data={source} columns={columns} width={1000} autoHeight={true}/>
            {/*<TPagination/>*/}
        </div>
    )
}

export default TableExample
