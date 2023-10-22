import './App.css'
import { useState } from 'react'

export default function App() {
  const [bill, setBill] = useState(0)
  const [service, setService] = useState(1)
  const [friend, setFriend] = useState()

  function handleBill(e) {
    setBill(e.target.value)
  }

  function handleService(e) {
    setService(e.target.value)
  }

  function handleFriend(e) {
    setFriend(e.target.value)
  }

  let tip = bill * (service / 100) + bill * (friend / 100)

  return (
    <div>
      <Bill bill={bill} onBillChange={handleBill} />
      <MFeedback service={service} onServiceChange={handleService} />
      <FFeedBack friend={friend} onFriendChange={handleFriend} />
      <Result bill={bill} tip={tip} />
      <button
        onClick={() => {
          setBill(0)
          setService(0)
          setFriend(0)
        }}
      >
        Reset
      </button>
    </div>
  )
}

function Bill({ bill, onBillChange }) {
  return (
    <div>
      <label>How Much was the bill?</label>
      <input type="text" onChange={(e) => onBillChange(e)} value={bill} />
    </div>
  )
}

function MFeedback({ service, onServiceChange }) {
  return (
    <div>
      <label>How was the service?</label>
      <select onChange={(e) => onServiceChange(e)} value={service}>
        <option value="1">very bad (0%)</option>
        <option value="2">it was ok (5%)</option>
        <option value="3">it was good (10%)</option>
      </select>
    </div>
  )
}

function FFeedBack({ friend, onFriendChange }) {
  return (
    <div>
      <label>How did your friend like the service?</label>
      <select
        value={friend}
        onChange={(e) => {
          onFriendChange(e)
        }}
      >
        <option value="1">very bad (0%)</option>
        <option value="2">it was ok (5%)</option>
        <option value="3">it was good (10%)</option>
      </select>
    </div>
  )
}

function Result({ bill, tip }) {
  return (
    <div>
      <p>You pay {`$${bill}.0`}</p>
      <p>Tip amount: {`$${tip}`}</p>
      <p>Total: {bill + tip}</p>
    </div>
  )
}
