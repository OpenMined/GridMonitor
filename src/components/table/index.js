import React, { Component, useState } from "react";
import "./table.css";

const Table = ({ columns, data, component }) => {
  const [expandedRows, setExpandedRows] = useState([]);

  const handleRowClick = rowId => {
    const currentExpandedRows = [...expandedRows];
    const isRowCurrentlyExpanded = currentExpandedRows.includes(rowId);

    const newExpandedRows = isRowCurrentlyExpanded
      ? currentExpandedRows.filter(id => id !== rowId)
      : currentExpandedRows.concat(rowId);

    setExpandedRows(newExpandedRows);
  };

  const renderItem = item => {
    const clickCallback = () => handleRowClick(item.id);
    const itemRows = [
      <tr onClick={clickCallback} key={"row-data-" + item.id}>
        <td>{item.status}</td>
        <td>{item.id}</td>
        <td>{item.address}</td>
      </tr>
    ];

    if (expandedRows.includes(item.id)) {
      itemRows.push(
        <tr key={"row-expanded-" + item.id}>
          <td className="expanded" colSpan={columns.length}>
            {component}
          </td>
        </tr>
      );
    }

    return itemRows;
  };

  let allItemRows = [];

  data.forEach(item => {
    const perItemRows = renderItem(item);
    allItemRows = allItemRows.concat(perItemRows);
  });

  return (
    <table cellPadding="0" cellSpacing="0" border="0" className="table">
      <thead>
        <tr>
          {columns.map(column => (
            <td>{column}</td>
          ))}
        </tr>
      </thead>
      <tbody>{allItemRows}</tbody>
    </table>
  );
};

export default Table;
