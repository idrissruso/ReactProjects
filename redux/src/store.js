import accountReducer from './features/accounts/accountsSlice'
import userReducer from './features/users/users.Slice'
import { configureStore } from '@reduxjs/toolkit'

export const store = configureStore({
  reducer: { account: accountReducer, user: userReducer },
})
