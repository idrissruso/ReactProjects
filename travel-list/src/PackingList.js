import { useState } from 'react'
import { Item } from './Item'

export function PackingList({ items, onItemDelete, onPack, handleClear }) {
  const [sort, setSort] = useState('input')

  let sortedItems

  function handleSort(e) {
    setSort(e.target.value)
  }

  if (sort === 'packed') {
    sortedItems = items.sort((a, b) => {
      return a.packed - b.packed
    })
  }

  if (sort === 'description') {
    sortedItems = items.sort((a, b) => {
      return a.description.localeCompare(b.description)
    })
  }

  if (sort === 'input') {
    sortedItems = items.sort((a, b) => {
      return a.id - b.id
    })
  }

  return (
    <div className="list">
      <ul>
        {sortedItems.map((item) => (
          <Item
            key={item.id}
            item={item}
            onItemDelete={onItemDelete}
            onPack={onPack}
          />
        ))}
      </ul>
      <div className="actions" onChange={handleSort} value={sort}>
        <select>
          <option value="input">Sort by order</option>
          <option value="packed">Sort by packed</option>
          <option value="description">Sort By description</option>
        </select>
        <button onClick={() => handleClear()}>Clear</button>
      </div>
    </div>
  )
}
