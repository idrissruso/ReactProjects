import { useEffect, useState } from 'react'
const KEY = '1459fadd'

export function useFetch(query) {
  const [movies, setMovies] = useState([])
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const controller = new AbortController()
    async function fetchMovies() {
      setLoading(true)
      setError('')
      try {
        const res = await fetch(
          `https://www.omdbapi.com/?apikey=${KEY}&s=${query}`,
          { signal: controller.signal }
        )
        const data = await res.json()
        if (data.Response === 'False') {
          setError(data.Error)
          setMovies([])
        } else {
          setError('')
          setMovies(data.Search)
        }
      } catch (err) {
        if (!err.name === 'AbortError') {
          setError(err.message)
        }
      }
      setLoading(false)
    }

    if (query.length < 3) {
      setMovies([])
      setError('')
      return
    }

    fetchMovies()

    return () => {
      console.log('cleanup')
      controller.abort()
    }
  }, [query])

  return { movies, error, loading }
}
