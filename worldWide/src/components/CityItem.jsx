import styles from './CityItem.module.css'
import { Link } from 'react-router-dom'

function formateD(d) {
  const date = new Date(d)
  return date.toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  })
}

function CityItem({ city }) {
  const { cityName, emoji, date, id, position } = city

  return (
    <li>
      <Link
        to={`${id}?lat=${position.lat}&lng=${position.lng}`}
        className={styles.cityItem}
      >
        <span className={styles.emoji}>{emoji}</span>
        <h3 className={styles.name}>{cityName}</h3>
        <time>
          <span className={styles.date}>Visited on: {formateD(date)}</span>
        </time>
        <button className={styles.deleteBtn}>&times;</button>
      </Link>
    </li>
  )
}

export default CityItem
