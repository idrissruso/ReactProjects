import styles from './CountryList.module.css'
import Spinner from './Spinner'
import CountryItem from './CountryItem'
import Message from './Message'

function CountryList({ cities, isLoading }) {
  if (isLoading) {
    return <Spinner />
  }

  if (cities.length === 0) {
    return <Message message="No cities to display" />
  }

  const countries = cities.reduce((acc, city) => {
    const country = acc.find((item) => item.country === city.country)

    if (!country) {
      acc.push({
        country: city.country,
        cities: [city],
        emoji: city.emoji,
      })
    } else {
      country.cities.push(city)
    }

    return acc
  }, [])

  return (
    <ul className={styles.countryList}>
      {countries.map((country, i) => (
        <CountryItem key={i} country={country} />
      ))}
    </ul>
  )
}

export default CountryList
