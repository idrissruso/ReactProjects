import Button from './Button'

function ButtonBack() {
  return (
    <Button
      type="back"
      onClick={(e) => {
        e.preventDefault()
      }}
    >
      &larr; Back
    </Button>
  )
}

export default ButtonBack
