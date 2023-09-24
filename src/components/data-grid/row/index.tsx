import { useTableContext } from "../Context";

export interface RowProps {
  row: unknown;
}

export default function Row({ row }: RowProps) {
  const { columns } = useTableContext();
  return (
    <tr className="">
      {columns.map((column, c) => (
        <td
          style={{
            width: column.width,
          }}
          key={c}
          className={column.className}
        >
          {column.valueGetter(row)}
        </td>
      ))}
    </tr>
  );
}
