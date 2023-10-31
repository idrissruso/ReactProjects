import NextQBtn from './NextQBtn'
import Timer from './Timer'

function Footer({ dispatch, answer, index, numQuestions, remainingTime }) {
  return (
    <footer>
      <NextQBtn
        dispatch={dispatch}
        answer={answer}
        index={index}
        numQuestions={numQuestions}
      />
      <Timer dispatch={dispatch} remainingTime={remainingTime} />
    </footer>
  )
}

export default Footer
