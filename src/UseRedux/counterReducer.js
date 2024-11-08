const initialState = { value: 0 }

// reducer: state를 바꿔주는 역할
function counterReducer(state = initialState, action) {
   // state = 0
   console.log(action) // {type: 'up', step: 2}
   if (action.type === 'up') {
      return { ...state, value: state.value + action.step }
   }

   return state
}

export default counterReducer
