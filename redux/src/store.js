import { combineReducers, createStore } from 'redux'
import accountReducer from './features/accounts/accountsSlice'
import userReducer from './features/users/users.Slice'

const rootStore = combineReducers({
  account: accountReducer,
  user: userReducer,
})
export const store = createStore(rootStore)
