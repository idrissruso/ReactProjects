import { createContext } from 'react'
import { useContext, useEffect, useState } from 'react'

const BASE_URL = 'http://localhost:3001'

const CitiesContext = createContext()

function CitiesProvider({ children }) {
  const [cities, setCities] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [currentCity, setCurrentCity] = useState({})

  useEffect(() => {
    async function getCities() {
      try {
        const response = await fetch(`${BASE_URL}/cities`)
        const data = await response.json()
        setCities(data)
        setIsLoading(false)
      } catch (error) {
        console.error(error)
      } finally {
        setIsLoading(false)
      }
    }
    getCities()
  }, [])

  async function getCity(id) {
    setIsLoading(true)

    try {
      const response = await fetch(`${BASE_URL}/cities/${id}`)
      const data = await response.json()
      setCurrentCity(data)
      setIsLoading(false)
    } catch (error) {
      console.error(error)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <CitiesContext.Provider
      value={{
        cities,
        isLoading,
        currentCity,
        getCity,
      }}
    >
      {children}
    </CitiesContext.Provider>
  )
}

function useCities() {
  const context = useContext(CitiesContext)
  if (context === undefined)
    throw new Error('the context is been used outside the context')

  return context
}

export { CitiesProvider, useCities }
