import styles from './Map.module.css'
import { useSearchParams } from 'react-router-dom'

function Map() {
  const [searchParams, setSearchParams] = useSearchParams()
  const lat = searchParams.get('lat')
  const lng = searchParams.get('lng')

  return (
    <iframe
      className={styles.mapContainer}
      title="map"
      src={`https://maps.google.com/maps?q=${lat},${lng}&hl=en&z=14&output=embed`}
    ></iframe>
  )
}

export default Map
