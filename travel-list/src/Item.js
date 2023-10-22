export function Item({ item, onItemDelete, onPack }) {
  return (
    <li>
      <input type="checkbox" onChange={() => onPack(item.id)} />
      <span style={item.packed ? { textDecoration: 'line-through' } : {}}>
        {item.quantity} {item.description}
      </span>
      <button onClick={() => onItemDelete(item.id)}>✖️</button>
    </li>
  )
}
