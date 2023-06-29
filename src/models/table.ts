import type { FC, ReactElement } from "react";

export interface Column {
  label: string;
  dataKey: string;
  colSpan?: number;
  component?: FC;
}

export type DataSource = {
  children?: Record<string, string | number>;
} & Record<string, string | number>;

export interface ColumnWithRender extends Omit<Column, "dataKey"> {
  render: (itemData: unknown) => ReactElement;
  dataKey?: never;
}
