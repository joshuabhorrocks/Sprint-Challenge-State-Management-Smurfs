const initialState = {
    data: [],
    isFetching: false,
    isAdding: false,
    error: ""
  }
  // console.log("Initial State: ", initialState)

export const smurfsReducer = (state = initialState, action) => {
  // console.log("Action Payload: ", action.payload)
  switch(action.type) {
    case "FETCH_SMURFS_START":
      console.log("State in reducer: ", state)
      return {
        ...state,
        isFetching: true
      };
    case "FETCH_SMURFS_SUCCESS":
      return {
        ...state,
        isFetching: false,
        data: action.payload,
        error: ""
      };
    case "FETCH_SMURFS_FAILURE":
      return {
        ...state,
        isfetching: false,
        error: action.payload
      };
    case "POST_SMURFS_SUCCESS":
      const newSmurf = {
        name: action.payload,
        age: action.payload,
        height: action.payload,
        id: Date.now()
      }
      return {
        ...state,
        data: [
          ...state.data,
          newSmurf
        ]
      }
      case "POST_SMURF_FAIL":
        return {
          ...state,
          addingSmurf: false,
          error: action.payload,
          fetchingSmurf: false
        };
    default:
      return state;
  }
}
