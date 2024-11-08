import { useDispatch, useSelector } from 'react-redux'

function Counter() {
   // reducer 호출(데이터 전달)
   const dispatch = useDispatch()

   // props 사용하지 않고 state 값을 바로 가져온다
   const count = useSelector((state) => {
      console.log('userSelector:', state)
      return state.value
   })
   return (
      <>
         <button
            onClick={() => {
               dispatch({ type: 'up', step: 2 })
            }}
         >
            +
         </button>
         {count}
      </>
   )
}

export default Counter
