import React from 'react';
import Cell from './Cell';
import type { Column, ColumnWithRender } from '../../models/table';

interface RowProps {
  columns: Column[] | ColumnWithRender[];
  rowData: Record<string, string | number>;
}

const Row: React.FC<RowProps> = ({ columns, rowData }) => {
  const getCellContent = (column: Column | ColumnWithRender) => {
    if ('render' in column) {
      return column.render(rowData);
    }

    return rowData[column.dataKey];
  };
  return (
    <tr>
      {columns.map(
        ({ component: CellContent = React.Fragment, ...column }, i) => (
          <Cell key={i}>
            <CellContent>{getCellContent(column)}</CellContent>
          </Cell>
        )
      )}
    </tr>
  );
};

export default React.memo(Row);
