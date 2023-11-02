import styles from './CityList.module.css'
import Spinner from './Spinner'
import CityItem from './CityItem'
import Message from './Message'

function CityList({ cities, isLoading }) {
  if (isLoading) {
    return <Spinner />
  }

  if (cities.length === 0) {
    return <Message message="No cities to display" />
  }

  return (
    <ul className={styles.cityList}>
      {cities.map((city) => (
        <CityItem key={city.id} city={city} />
      ))}
    </ul>
  )
}

export default CityList
