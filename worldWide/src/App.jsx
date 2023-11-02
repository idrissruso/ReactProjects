import Homepage from './pages/Homepage'
import NotFound from './pages/NotFound'
import Pricing from './pages/Pricing'
import Product from './pages/Product'
import Login from './pages/Login'
import AppLayout from './pages/AppLayout'
import CityList from './components/CityList'
import CountryList from './components/CountryList'
import City from './components/City'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import '../index.css'
import { useState, useEffect } from 'react'

const BASE_URL = 'http://localhost:3001'

function App() {
  const [cities, setCities] = useState([])
  const [isLoading, setIsLoading] = useState(true)

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

  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Homepage />} />
        <Route path="pricing" element={<Pricing />} />
        <Route path="product" element={<Product />} />
        <Route path="login" element={<Login />} />
        <Route path="app" element={<AppLayout />}>
          <Route
            index
            element={<CityList cities={cities} isLoading={isLoading} />}
          />
          <Route
            path="cities"
            element={<CityList cities={cities} isLoading={isLoading} />}
          />
          <Route path="cities/:id" element={<City />} />
          <Route
            path="countries"
            element={<CountryList cities={cities} isLoading={isLoading} />}
          />
          <Route path="form" element={<p>Form</p>} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
