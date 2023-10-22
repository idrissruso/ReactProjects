export function Stats({ items }) {
  if (items.length === 0)
    return (
      <footer className="stats">
        <em>add some items to your list</em>
      </footer>
    )

  const itemsTotal = items.length
  const packedItems = items.filter((item) => item.packed).length
  const percentage = ((packedItems / itemsTotal) * 100).toFixed(1)

  return (
    <footer className="stats">
      <em>
        {packedItems === itemsTotal
          ? 'Great job! You are ready for your trip!'
          : `You have ${itemsTotal} items on your list, and you already packed
        ${percentage}%`}
      </em>
    </footer>
  )
}
