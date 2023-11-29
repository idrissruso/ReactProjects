import { useSelector } from 'react-redux'

function Customer() {
  const user = useSelector((store) => store.user)
  console.log(user)

  return <h2>👋 Welcome,{user.fullName}</h2>
}

export default Customer
