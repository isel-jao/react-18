import BodyRow from "../row";
import { useTableContext } from "../Context";

export default function Body() {
  const { rows } = useTableContext();
  return (
    <tbody>
      {rows.map((row, r) => (
        <BodyRow row={row} key={r} />
      ))}
    </tbody>
  );
}
