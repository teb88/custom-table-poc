import React from 'react';
import type { Column, ColumnWithRender } from '../../models/table';

interface TableHeadProps {
  columns: ColumnWithRender[] | Column[];
}

const TableHead: React.FC<TableHeadProps> = ({ columns }) => {
  return (
    <thead>
      <tr>
        {columns.map(
          ({ component: Component = React.Fragment, ...column }, i) => (
            <th key={`${column.dataKey}-${i}`} colSpan={column.colSpan}>
              <Component>{column.label}</Component>
            </th>
          )
        )}
      </tr>
    </thead>
  );
};

export default React.memo(TableHead);
