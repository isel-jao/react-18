import React from "react";
import { DataGridColumn } from ".";

const TableContext = React.createContext<{
  columns: DataGridColumn<unknown>[];
  rows: unknown[];
} | null>(null);

export default TableContext;

export function useTableContext() {
  const context = React.useContext(TableContext);
  if (!context) {
    throw new Error(
      `useTableContext must be used within a TableContext Provider`,
    );
  }
  return context;
}
