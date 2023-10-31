import { useEffect } from 'react'

function Timer({ dispatch, remainingTime }) {
  const mins = Math.floor(remainingTime / 60)
  const secs = remainingTime % 60

  useEffect(() => {
    if (remainingTime === 0) {
      dispatch({ type: 'finish' })
    }
    const timer = setTimeout(() => {
      dispatch({ type: 'tick' })
    }, 1000)
    return () => clearTimeout(timer)
  }, [remainingTime, dispatch])

  return (
    <div className="timer">
      <span role="img" aria-label="timer">
        ⏳
      </span>{' '}
      {mins < 10 ? `0${mins}` : mins}:{secs < 10 ? `0${secs}` : secs}
    </div>
  )
}

export default Timer
