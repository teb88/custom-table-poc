import React from 'react';

interface CellProps {
  children: React.ReactElement;
}

const Cell: React.FC<CellProps> = ({ children }) => {
  return <td>{children}</td>;
};

export default Cell;
