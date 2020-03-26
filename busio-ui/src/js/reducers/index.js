import { DELETE_BUS, DATA_LOADED, CLEAN_UP_REMOTE } from '../constants/action-types'

const initialState = {
    remoteBusses: []
};
const rootReducer = (state = initialState, action) => {
  if(action.type === DELETE_BUS){
    return Object.assign({}, state , {
      remoteBusses: state.remoteBusses.filter(item => item._id !== action.payload._id )
    })
  }
  if(action.type === DATA_LOADED){
      return Object.assign({}, state , {
          remoteBusses: state.remoteBusses.concat(action.payload)
      })
  }
  if(action.type === CLEAN_UP_REMOTE){
    return Object.assign({}, state, {
      remoteBusses: []
    })
  }
  return state;
};
  
  export default rootReducer;