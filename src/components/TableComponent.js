import React from "react";

const TableComponent = ({ data }) => {
    const headers = Object.keys(data[0]);
    const rows = data.map(item => Object.values(item))
    return (
        <table className="table-auto">
            <thead className="border-b-2 border-red-600 bg-red-200 text-red-600">
                <tr>
                    {headers.map(header => <th key={header} className="border-l  last:border-r px-6">{header}</th>)}
                </tr>
            </thead>
            <tbody className="border-b-2 border-red-600">
                {rows.map((row, i) => (
                    <tr key={i} className="border-b border-red-600 border-dashed">
                        {row.map((column, i) => <td key={i} className="border-l last:border-r text-center">{column}</td>)}
                    </tr>
                ))}
            </tbody>
        </table>
    )
}
export default TableComponent;
