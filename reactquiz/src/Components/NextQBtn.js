function NextQBtn({ answer, dispatch, index, numQuestions }) {
  if (answer === null) {
    return null
  }
  return (
    <button
      className="btn btn-ui"
      onClick={() => {
        if (index === numQuestions - 1) {
          dispatch({ type: 'finish' })
        } else {
          dispatch({ type: 'nextQuestion' })
        }
      }}
    >
      {index === numQuestions - 1 ? 'Finish' : 'Next Question'}
    </button>
  )
}

export default NextQBtn
