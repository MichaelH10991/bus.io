import {
  DELETE_BUS,
  SAVED_DATA_LOADED,
  CLEAN_UP_SAVED,
  REMOTE_DATA_LOADED,
  CLEAN_UP_REMOTE,
  API_ERRORED
} from "../constants/action-types"

const initialState = {
  savedBusses: [],
  remoteBusses: [],
  apiErrors: []
}

const rootReducer = (state = initialState, action) => {
  if (action.type === DELETE_BUS) {
    return Object.assign({}, state, {
      savedBusses: state.savedBusses.filter(item => item._id !== action.payload._id)
    })
  }
  if (action.type === SAVED_DATA_LOADED) {
    return Object.assign({}, state, {
      savedBusses: state.savedBusses.concat(action.payload)
    })
  }
  if (action.type === CLEAN_UP_SAVED) {
    return Object.assign({}, state, {
      savedBusses: []
    })
  }
  if (action.type === REMOTE_DATA_LOADED) {
    return Object.assign({}, state, {
      remoteBusses: state.remoteBusses.concat(action.payload)
    })
  }
  if (action.type === CLEAN_UP_REMOTE) {
    return Object.assign({}, state, {
      remoteBusses: []
    })
  }
  if (action.type === API_ERRORED) {
    return Object.assign({}, state, {
      apiErrors: state.apiErrors.concat(action.payload)
    })
  }
  return state
}

export default rootReducer
