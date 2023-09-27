/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useEffect } from "react";
import { twMerge } from "tailwind-merge";
import TableContext from "./Context";
import Head from "./head";
import Body from "./body";

type Option = {
  value: unknown;
  label: React.ReactNode;
};

interface DataGridFilter {
  type: "text" | "date" | "select" | "number";
  onChange: (value: string) => void;
  options?: Option[];
}

interface DataGridSelectFilter extends DataGridFilter {
  type: "select";
}

interface DataGridTextFilter extends Omit<DataGridFilter, "options"> {
  type: "text";
  debounce?: number;
}

interface DataGridDateFilter extends Omit<DataGridFilter, "options"> {
  type: "date";
}

export type DataGridColumn<T> = {
  header: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  width?: string;
  label: string;
  show?: boolean;
  filter?: DataGridSelectFilter | DataGridTextFilter | DataGridDateFilter;
  valueGetter: (row: T) => React.ReactNode;
};

export interface DataGridProps<T>
  extends Omit<React.HTMLAttributes<HTMLTableElement>, "children"> {
  rows: T[];
  columns: DataGridColumn<T>[];
  hideAction?: boolean;
  action?: (row: T) => React.ReactNode;
  loading?: boolean;
  error?: boolean;
  cellMinWidth?: number;
}

export default function DataGrid<T>({
  rows,
  columns,
  hideAction,
  loading,
  error,
  className,
  cellMinWidth = 100,
  ...props
}: DataGridProps<T>) {
  const [selectedColumns, setSelectedColumns] = React.useState(
    columns.filter((column) => column.show !== false),
  );

  useEffect(() => {
    setSelectedColumns(columns.filter((column) => column.show !== false));
  }, [columns]);
  return (
    <TableContext.Provider
      value={{
        columns: selectedColumns as DataGridColumn<unknown>[],
        rows,
      }}
    >
      <table
        {...props}
        className={twMerge(
          "table-auto text-left [&>*>tr>*]:whitespace-nowrap [&>*>tr>*]:px-4  [&>*>tr>*]:py-2 [&>tbody>tr:hover]:bg-[#7f7f7f]/5 [&>tbody>tr:not(:last-child)]:border-b [&>tbody>tr]:border-[#7f7f7f]/20",
          className,
        )}
      >
        <Head />
        <Body />
        {rows.length === 0 && (
          <tbody>
            <tr>
              <td colSpan={selectedColumns.length}>
                <div className=" w-full py-16 text-center">
                  no data available.
                </div>
              </td>
            </tr>
          </tbody>
        )}
      </table>
    </TableContext.Provider>
  );
}
