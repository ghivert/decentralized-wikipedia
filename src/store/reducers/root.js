export const UPDATE_USER = 'UPDATE_USER'
export const CONNECT_ETHEREUM = 'CONNECT_ETHEREUM'

const initialState = {
  user: null,
  account: null,
  contract: null,
}

const updateUser = user => ({ type: UPDATE_USER, user })

const connectEthereum = ({ account, contract }) => ({
  type: CONNECT_ETHEREUM,
  account,
  contract,
})

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_USER:
      const { user } = action
      return { ...state, user }
    case CONNECT_ETHEREUM:
      const { account, contract } = action
      return { ...state, account, contract }
    default:
      return state
  }
}

export default rootReducer
export { updateUser, connectEthereum }
