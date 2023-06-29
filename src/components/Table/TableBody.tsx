import React, { FC } from 'react';
import type { Column, ColumnWithRender, DataSource } from '../../models/table';
import Row from './Row';

interface TableBodyProps {
  columns: ColumnWithRender[] | Column[];
  data: DataSource[];
  customRowComponent?: FC;
  idKey?: string;
}

const TableBody: React.FC<TableBodyProps> = ({
  columns,
  data,
  customRowComponent = Row,
  idKey = 'id',
}) => {
  const Row = customRowComponent;

  return (
    <tbody>
      {data.map((item, i) => (
        <Row key={item[idKey] as string} rowData={item} columns={columns} />
      ))}
    </tbody>
  );
};

export default React.memo(TableBody);
