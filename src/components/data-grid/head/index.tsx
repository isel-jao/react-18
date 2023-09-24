import { useTableContext } from "../Context";

export default function Head() {
  const { columns } = useTableContext();
  return (
    <thead>
      <tr>
        {columns.map((column, c) => (
          <th
            key={c}
            style={{ width: column.width }}
            className={column.className}
          >
            {column.header}
          </th>
        ))}
      </tr>
    </thead>
  );
}
