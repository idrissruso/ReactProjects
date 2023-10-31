import { useEffect, useReducer } from 'react'
import Header from './Header'
import Main from './Main'
import Loader from './Loader'
import StartScreen from './StartScreen'
import Error from './Error'
import Question from './Question'

import ProgressBar from './ProgressBar'
import FinishScreen from './FinishScreen'
import Footer from './Footer'

const initialState = {
  questions: [],
  status: 'loading',
  index: 0,
  answer: null,
  points: 0,
  tick: 30,
}

function reducer(state, action) {
  switch (action.type) {
    case 'fetched':
      return { ...state, questions: action.payload, status: 'fetched' }
    case 'error':
      return { ...state, status: 'error' }
    case 'nextQuestion':
      return { ...state, index: state.index + 1, answer: null, tick: 30 }
    case 'newAnswer':
      const currentQuestion = state.questions.at(state.index)
      return {
        ...state,
        answer: action.payload,
        points:
          currentQuestion.correctOption === action.payload
            ? currentQuestion.points + state.points
            : state.points,
      }
    case 'start':
      return { ...state, status: 'start' }
    case 'finish':
      return { ...state, status: 'finish' }
    case 'restart':
      return {
        ...state,
        status: 'start',
        index: 0,
        points: 0,
        answer: null,
        tick: 30,
      }

    case 'tick':
      return { ...state, tick: state.tick - 1 }
    default:
      throw new Error('unknown action ')
  }
}

export default function App() {
  const [{ questions, status, index, answer, points, tick }, dispatch] =
    useReducer(reducer, initialState)

  const numQuestions = questions.length
  const totalPoints = questions.reduce((acc, curr) => acc + curr.points, 0)

  useEffect(() => {
    function fetchQuestions() {
      fetch('  http://localhost:3001/questions')
        .then((data) => data.json())
        .then((data) => dispatch({ type: 'fetched', payload: data }))
        .catch((err) => {
          console.log(err)
          dispatch({ type: 'error' })
        })
    }

    fetchQuestions()
  }, [])

  return (
    <div className="app">
      <Header />
      <Main>
        {status === 'loading' && <Loader />}
        {status === 'fetched' && (
          <StartScreen numQuestions={numQuestions} dispatch={dispatch} />
        )}
        {status === 'error' && <Error />}
        {status === 'start' && (
          <>
            <ProgressBar
              numQuestions={numQuestions}
              index={index}
              points={points}
              totalPoints={totalPoints}
            />
            <Question
              question={questions[index]}
              dispatch={dispatch}
              answer={answer}
            />
            <Footer
              dispatch={dispatch}
              answer={answer}
              index={index}
              numQuestions={numQuestions}
              remainingTime={tick}
            ></Footer>
          </>
        )}
        {status === 'finish' && (
          <FinishScreen
            points={points}
            totalPoints={totalPoints}
            dispatch={dispatch}
          />
        )}
      </Main>
    </div>
  )
}
