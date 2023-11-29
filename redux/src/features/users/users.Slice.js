const initStateUser = {
  fullName: '',
  id: '',
  createdAt: '',
}

export default function userReducer(state = initStateUser, action) {
  switch (action.type) {
    case 'user/createUser':
      return {
        ...state,
        fullName: action.payload.fullName,
        id: action.payload.id,
        createdAt: action.payload.createdAt,
      }

    case 'user/updateName':
      return { ...state, fullName: action.payload }

    default:
      return state
  }
}
export function createUser(fullName, id) {
  return {
    type: 'user/createUser',
    payload: { fullName, id, createdAt: new Date().toISOString() },
  }
}

export function updateName(fullName) {
  return { type: 'user/updateName', payload: fullName }
}
