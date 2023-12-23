import React from "react";
import "./Table.css";

/**
 * This is a generic Table component that renders a header and columns based on the values given to it. It is pre-styled.
 * @param {headers} string[] -> ['username', 'distance', 'broadcaster']
 * @param {columns} {id, username}[] -> [{id: 5, username: 'Sally'}, {id: 6, username: 'Bob'}] 
 * @returns {ReactNode} 
 */
const Table = ({headers = [], columns = []}) => {
  return (
    <table className="table">
      <thead>
        <tr>
          {headers.map(header => (
            <th key={header}>{header}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {columns.map(({id, rowData}) => (
          <tr key={id}>
            {rowData.map((cell, index) => (
                <td key={index}>{cell}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
