import CreateCustomer from './features/users/CreateCustomer'
import Customer from './features/users/Customer'
import AccountOperations from './features/accounts/AccountOperations'
import BalanceDisplay from './features/accounts/BalanceDisplay'
import { useSelector } from 'react-redux'

function App() {
  const user = useSelector((store) => store.user)
  console.log(user)

  return (
    <div>
      <h1>🏦 The React-Redux Bank ⚛️</h1>
      {user.fullName === '' ? (
        <CreateCustomer />
      ) : (
        <>
          <Customer />
          <AccountOperations />
          <BalanceDisplay />
        </>
      )}
    </div>
  )
}

export default App
