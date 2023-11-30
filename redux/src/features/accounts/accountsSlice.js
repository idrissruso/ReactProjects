const iniStateAccount = {
  balance: 0,
  loan: 0,
  purpose: '',
  isLoading: false,
}
export default function accountReducer(state = iniStateAccount, action) {
  switch (action.type) {
    case 'account/withdraw':
      return { ...state, balance: state.balance - action.payload }
    case 'account/deposit':
      return { ...state, balance: state.balance + action.payload }
    case 'account/requestLoan':
      if (state.loan > 0) return state
      return {
        ...state,
        loan: action.payload.amount,
        balance: state.balance + action.payload.amount,
        purpose: action.payload.purpose,
      }
    case 'account/payLoan':
      return {
        ...state,
        balance: state.balance - state.loan,
        loan: 0,
        purpose: '',
      }
    case 'account/isLoading':
      return { ...state, isLoading: true }
    default:
      return state
  }
}
export function withdraw(amount) {
  return { type: 'account/withdraw', payload: amount }
}

export function deposit(amount, currency) {
  if (currency === 'USD') return { type: 'account/deposit', payload: amount }

  return async function (dispatch, getState) {
    dispatch({ type: 'account/isLoading' })
    const res = await fetch(
      `https://api.frankfurter.app/latest?amount=${amount}&from=${currency}&to=USD`
    )

    const data = await res.json()

    dispatch({ type: 'account/deposit', payload: data.rates.USD })
  }
}

export function requestLoan(amount, purpose) {
  return { type: 'account/requestLoan', payload: { amount, purpose } }
}

export function payLoan() {
  return { type: 'account/payLoan' }
}
