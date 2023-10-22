import { useState } from 'react'

export default function App() {
  const [items, setItems] = useState([])

  function handleItems(params) {
    setItems([...items, params])
  }

  function handleDelete(id) {
    setItems(items.filter((item) => item.id !== id))
  }

  function handlePack(id) {
    setItems(
      items.map((item) => {
        if (item.id === id) {
          return { ...item, packed: !item.packed }
        } else return item
      })
    )
  }

  return (
    <div className="app">
      <Logo />
      <Form onAddItems={handleItems} />
      <PackingList
        items={items}
        onItemDelete={handleDelete}
        onPack={handlePack}
      />
      <Stats items={items} />
    </div>
  )
}

function Logo() {
  return <h1>🌴Far Away💼</h1>
}
function Form(props) {
  const [description, setDescription] = useState('')
  const [quantity, setQuantity] = useState(1)

  function handleSubmit(e) {
    e.preventDefault()
    if (!description) return

    const item = {
      id: new Date().toUTCString(),
      description,
      quantity,
      packed: false,
    }
    props.onAddItems(item)
    setDescription('')
    setQuantity(1)
  }

  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <h3>what do you need for your trip</h3>
      <select
        onChange={(e) => {
          setQuantity(+e.target.value)
        }}
        value={quantity}
      >
        {Array.from({ length: 20 }, (_, i) => i + 1).map((i) => (
          <option value={i} key={i}>
            {i}
          </option>
        ))}
      </select>
      <input
        type="text"
        placeholder="type..."
        onChange={(e) => setDescription(e.target.value)}
        value={description}
      />
      <button type="submit">Add</button>
    </form>
  )
}
function PackingList({ items, onItemDelete, onPack }) {
  return (
    <div className="list">
      <ul>
        {items.map((item) => (
          <Item
            key={item.id}
            item={item}
            onItemDelete={onItemDelete}
            onPack={onPack}
          />
        ))}
      </ul>
    </div>
  )
}

function Item({ item, onItemDelete, onPack }) {
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

function Stats({ items }) {
  const itemsTotal = items.length
  const packedItems = items.filter((item) => item.packed).length
  const percentage = ((packedItems / itemsTotal) * 100).toFixed(1)

  return (
    <footer className="stats">
      <em>
        You have {itemsTotal} items on your list, and you already packed{' '}
        {percentage}%
      </em>
    </footer>
  )
}
