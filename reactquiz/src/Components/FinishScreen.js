function FinishScreen({ points, totalPoints, dispatch }) {
  const percentage = Math.round((points / totalPoints) * 100)
  let emoji = ''

  if (percentage === 100) {
    emoji = '🥳'
  }
  if (percentage >= 80 && percentage < 100) {
    emoji = '😀'
  }
  if (percentage >= 60 && percentage < 80) {
    emoji = '🙂'
  }
  if (percentage >= 40 && percentage < 60) {
    emoji = '😕'
  }
  if (percentage >= 20 && percentage < 40) {
    emoji = '😟'
  }
  if (percentage >= 0 && percentage < 20) {
    emoji = '😭'
  }

  return (
    <>
      <p className="result">
        <span>{emoji}</span>You scored <strong>{points}</strong> out of{' '}
        <strong>{totalPoints}</strong> points! {percentage}%
      </p>
      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: 'restart' })}
      >
        Restart
      </button>
    </>
  )
}

export default FinishScreen
