import './index.css'
import { useState } from 'react'

export default function App() {
  const [step, setStep] = useState(1)
  const [isOpen, setIsOpen] = useState(true)

  const messages = [
    'Learn React ⚛️',
    'Apply for jobs 💼',
    'Invest your new income 🤑',
  ]
  function handleIsOpen() {
    setIsOpen(!isOpen)
  }

  function handleNext() {
    if (step < 3) {
      setStep(step + 1)
    }
  }

  function handlePrevious() {
    if (step > 1) {
      setStep(step - 1)
    }
  }

  return (
    <>
      <button className="close" onClick={handleIsOpen}>
        &times;
      </button>
      {isOpen && (
        <div className="steps">
          <div className="numbers">
            <div className={`number ${step >= 1 ? 'active' : ''}`}>1</div>
            <div className={`number ${step >= 2 ? 'active' : ''}`}>2</div>
            <div className={`number ${step >= 3 ? 'active' : ''}`}>1</div>
          </div>
          <p className="message">{`step: ${step} ${messages[step - 1]}`}</p>
          <div className="buttons">
            <button className="button" onClick={handlePrevious}>
              Prev
            </button>
            <button className="button" onClick={handleNext}>
              Next
            </button>
          </div>
        </div>
      )}
    </>
  )
}
