import styles from './Login.module.css'
import { useState } from 'react'
import NavBar from '../components/NavBar'
import { useAuth } from '../contexts/AuthContext'
import { useNavigate } from 'react-router-dom'

export default function Login() {
  // PRE-FILL FOR DEV PURPOSES
  const [email, setEmail] = useState('jack@example.com')
  const [password, setPassword] = useState('qwerty')
  const { isAuthenticated, login } = useAuth()
  const navigate = useNavigate()

  return (
    <main className={styles.login}>
      <NavBar />
      <form className={styles.form}>
        <div className={styles.row}>
          <label htmlFor="email">Email address</label>
          <input
            type="email"
            id="email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
        </div>

        <div className={styles.row}>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
        </div>

        <div>
          <button
            onClick={(e) => {
              e.preventDefault()
              login(email, password)
              if (isAuthenticated) {
                navigate('/app')
              } else {
                alert('Invalid credentials')
              }
            }}
          >
            Login
          </button>
        </div>
      </form>
    </main>
  )
}
