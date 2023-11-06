import { useContext, createContext, useReducer } from 'react'

const FAKE_USER = {
  name: 'Jack',
  email: 'jack@example.com',
  password: 'qwerty',
  avatar: 'https://i.pravatar.cc/100?u=zz',
}

const AuthContext = createContext()

const initialValue = {
  user: null,
  isAuthenticated: false,
}

function reducer(state, action) {
  switch (action.type) {
    case 'login':
      return { ...state, user: action.Payload, isAuthenticated: true }

    case 'logout':
      return { ...state, user: null, isAuthenticated: false }

    default:
      throw new Error('Unexpected action')
  }
}

function AuthProvider({ children }) {
  const [{ user, isAuthenticated }, dispatch] = useReducer(
    reducer,
    initialValue
  )

  function login(email, password) {
    if (email === FAKE_USER.email && password === FAKE_USER.password) {
      dispatch({ type: 'login', Payload: FAKE_USER })
    }
  }

  function logout() {
    dispatch({ type: 'logout' })
  }
  return (
    <AuthContext.Provider
      value={{
        user,
        isAuthenticated,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

function useAuth() {
  const context = useContext(AuthContext)
  if (context === undefined)
    throw new Error('using the provider outside it context')

  return context
}

export { AuthProvider, useAuth }
