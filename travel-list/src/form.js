import { useState } from 'react'
export default function Form(props) {
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
