function ProgressBar({ numQuestions, index, points, totalPoints }) {
  return (
    <header className="progress">
      <progress max={numQuestions} value={index} />
      <p>
        Question {index + 1} / {numQuestions}
      </p>
      <p>
        {points} / {totalPoints} Points
      </p>
    </header>
  )
}

export default ProgressBar
