export default function Item({ data, onDeleteItems, onChangePacked }) {
  return (
    <li>
      <input
        type="checkbox"
        value={data.packed}
        onChange={() => onChangePacked(data.id)}
      />

      <span style={data.packed ? { textDecoration: "Line-through" } : {}}>
        {data.quantity} {data.description}
      </span>
      <button onClick={() => onDeleteItems(data.id)}>❌</button>
    </li>
  );
}
