import React from 'react';

const Row = ({ rowData, colDefs }) => {
    return <tr>{colDefs.map(colDef => {
        const { id, renderer: C } = colDef;
        const value = rowData[colDef.id];
        return <td key={id}>{C ? <C value={value} /> : value}</td>
    })}</tr>
}

const Table = ({ colDefs, data }) => {
    return <table>
        <thead>
            <tr>
                {colDefs.map(colDef => <th key={colDef.id}>{colDef.title}</th>)}
            </tr>
        </thead>
        <tbody>
            {data.map((d, key) => <Row rowData={d} colDefs={colDefs} key={`${d.Time}${key}`} />)}
        </tbody>
    </table>
}

export default Table;