import { useState } from 'react'
import Logo from './logo'
import Form from './form'
import { PackingList } from './PackingList'
import { Stats } from './Stats'

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

  function handleClear() {
    const confirm = window.confirm('Are you sure you want to clear the list?')
    if (!confirm) return
    setItems([])
  }

  return (
    <div className="app">
      <Logo />
      <Form onAddItems={handleItems} />
      <PackingList
        items={items}
        onItemDelete={handleDelete}
        onPack={handlePack}
        handleClear={handleClear}
      />
      <Stats items={items} />
    </div>
  )
}
