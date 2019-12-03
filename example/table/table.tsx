import React from 'react';
import Table from "../../lib/table/table";

const TableExample = () => {
    const columns = [
        {
            title: 'name',
            key: 'name',
        },
        {
            title: 'age',
            key: 'age',
        },
        {
            title: 'gender',
            key: 'gender',
        }
    ];
    const source = [
        {
            name: 'frank',
            age: 18,
            gender: 'male',
        },
        {
            name: 'nemo',
            age: 20,
            gender: 'male',
        },
        {
            name: 'leo',
            age: 1,
            gender: 'male',
        },
        {
            name: 'may',
            age: 1,
            gender: 'male',
        }
    ];
    return (
        <div>
            Table Example
            <Table columns={columns} source={source}/>
        </div>
    )
}

export default TableExample
