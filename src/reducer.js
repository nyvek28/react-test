const initialState = {
  counters: [],
  idCounter: 1,

}

const reducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case 'ADD_COUNTER': {
      return {
        ...state,
        idCounter: state.idCounter + 1,
        counters: [
          ...state.counters,
          payload
        ]
      }
    }
    case 'DELETE_COUNTER': {
      return {
        ...state,
        counters: state.counters.filter((counter) => {
          return counter.id !== payload;
        })
      }
    }
    case 'COUNT_CLICK': {
      return {
        ...state,
        counters: state.counters.map ((counter) => {
          if(counter.id === payload){
            return {
              ...counter,
              counts: counter.counts + 1,
            }
          }
          return counter;
        })
      }
    }
    default: {
      return state;
    }
  }
};

export default reducer;