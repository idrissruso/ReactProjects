import styles from './Map.module.css'
import { useSearchParams, useNavigate } from 'react-router-dom'

function Map() {
  const [searchParams, setSearchParams] = useSearchParams()
  const lat = searchParams.get('lat')
  const lng = searchParams.get('lng')

  const navigate = useNavigate()

  return (
    <div className={styles.mapContainer} onClick={() => navigate('form')}></div>
  )
}

export default Map
