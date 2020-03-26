import { DELETE_BUS, DATA_LOADED } from '../constants/action-types'

const initialState = {
    remoteBusses: []
  };
  
  function rootReducer(state = initialState, action) {
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
    return state;
  };
  
  export default rootReducer;