import React from 'react';
import TableHead from './TableHead';
import TableBody from './TableBody';
import type { Column, ColumnWithRender, DataSource } from '../../models/table';

interface TableProps {
  columns: ColumnWithRender[] | Column[];
  data: DataSource[];
}

const Table: React.FC<TableProps> = ({ data, columns }) => {
  return (
    <table>
      <TableHead columns={columns} />
      <TableBody columns={columns} data={data} />
    </table>
  );
};

export default React.memo(Table);
