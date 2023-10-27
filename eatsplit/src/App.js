import { useState } from 'react'

const initialFriends = [
  {
    id: 118836,
    name: 'Clark',
    image: 'https://i.pravatar.cc/48?u=118836',
    balance: -7,
  },
  {
    id: 933372,
    name: 'Sarah',
    image: 'https://i.pravatar.cc/48?u=933372',
    balance: 20,
  },
  {
    id: 499476,
    name: 'Anthony',
    image: 'https://i.pravatar.cc/48?u=499476',
    balance: 0,
  },
]

export default function App() {
  const [addFriend, setAddFriend] = useState(false)
  const [friends, setFriends] = useState(initialFriends)
  const [selectedFriend, setSelectedFriend] = useState(null)

  function handleFriends(friend) {
    setFriends((friends) => [...friends, friend])
  }

  function handleAddFriend() {
    setAddFriend(!addFriend)
  }

  function handleSelection(friend) {
    setSelectedFriend(friend)
  }

  return (
    <div className="app">
      <div className="sidebar">
        <FriendList friends={friends} onSelection={handleSelection} />
        {addFriend && <FormAddFriend onAddNewUser={handleFriends} />}
        <Btn onClick={handleAddFriend}>
          {addFriend ? 'close' : 'add friend'}
        </Btn>
      </div>
      {selectedFriend && <FormSplitBill friend={selectedFriend} />}
    </div>
  )
}

function FriendList({ friends, onSelection }) {
  return (
    <ul>
      {friends.map((friend) => (
        <FriendListItem
          friendItem={friend}
          key={friend.id}
          onSelection={onSelection}
        />
      ))}
    </ul>
  )
}

function FriendListItem({ friendItem, onSelection }) {
  return (
    <li>
      <img src={friendItem.image} alt={friendItem.name} />
      <div>
        <h3>{friendItem.name}</h3>
        {friendItem.balance < 0 ? (
          <p className="red">{`you owe ${friendItem.name} ${friendItem.balance}`}</p>
        ) : friendItem.balance > 0 ? (
          <p className="green">{`${friendItem.name} awes you ${friendItem.balance}`}</p>
        ) : (
          <p>{`${friendItem.name} is all settled up`}</p>
        )}
      </div>
      <Btn onClick={() => onSelection(friendItem)}>Select</Btn>
    </li>
  )
}

function Btn({ children, onClick }) {
  return (
    <button type="submit" className="button" onClick={onClick}>
      {children}
    </button>
  )
}

function FormAddFriend({ onAddNewUser }) {
  const [name, setName] = useState('')
  const [image, setImage] = useState('https://i.pravatar.cc/48?u=')

  function handleNameChange(event) {
    setName(event.target.value)
  }

  function handleImageChange(event) {
    setImage(event.target.value)
  }

  function handleSubmit(e) {
    e.preventDefault()
    const friend = {
      id: Math.floor(Math.random() * 1000000),
      name: name,
      image: image,
      balance: 0,
    }
    onAddNewUser(friend)
    setName('')
    setImage('https://i.pravatar.cc/48?u=')
  }

  return (
    <>
      <form className="form-add-friend" onSubmit={(e) => handleSubmit(e)}>
        <label>👨‍👩‍👧‍👦Name</label>
        <input
          type="text"
          placeholder="name"
          value={name}
          onChange={handleNameChange}
        />
        <label>📸 Image url</label>
        <input
          type="text"
          placeholder="url"
          value={image}
          onChange={handleImageChange}
        />
        <Btn>Add Friend</Btn>
      </form>
    </>
  )
}

function FormSplitBill({ friend }) {
  const [billValue, setBillValue] = useState(0)
  const [yourExpense, setYourExpense] = useState(0)
  const [billPayer, setBillPayer] = useState('Me')

  return (
    <form className="form-split-bill">
      <h2>Split A Bill with {friend.name}</h2>
      <label>💵 Bill value</label>
      <input
        type="number"
        value={billValue}
        onChange={(e) => setBillValue(e.target.value)}
      />
      <label>💰Your Expense</label>
      <input
        type="number"
        value={yourExpense}
        onChange={(e) => setYourExpense(e.target.value)}
      />
      <label>💵{friend.name}'s expense</label>
      <input type="number" disabled={true} value={billValue - yourExpense} />
      <label>😉Who is paying the Bill ? </label>
      <select value={billPayer} onChange={(e) => setBillPayer(e.target.value)}>
        <option>Me</option>
        <option>{friend.name}</option>
      </select>
      <Btn>Split Bill</Btn>
    </form>
  )
}
