const initialState = {
    remoteBusses: []
  };
  
  function rootReducer(state = initialState, action) {
      if(action.type === "DATA_LOADED"){
          return Object.assign({}, state , {
              remoteBusses: state.remoteBusses.concat(action.payload)
          })
      }
    return state;
  };
  
  export default rootReducer;