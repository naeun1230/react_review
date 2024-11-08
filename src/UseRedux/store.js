import { createStore } from 'redux'
import counterReducer from './counterReducer'

// store: reducer와 state를 저장하는 창고
// reducer를 반드시 저장
const store = createStore(counterReducer)

export default store
