import React, { useState, useReducer } from 'react'

function Chapter11() {
   const [number, setNumber] = useState(1)
   const ChangeNumber = (e) => setNumber(Number(e.target.value))

   // count는 state 리듀서가 state를 건드림
   const [count, countDispatch] = useReducer(countReducer, 0)

   //reducer: state를 바꿔준다
   //oldCount : 현재 state
   function countReducer(oldCount, action) {
      console.log('oldCount:', oldCount)
      console.log('action:', action)

      //리듀스에서 리턴은 state값을 바꿔주는 것
      if (action.type === 'UP') {
         return oldCount + action.number
      } else if (action.type === 'DOWN') {
         return oldCount - action.number
      } else if (action.type === 'RESET') {
         return 0
      }
   }

   //디스패치 -> 리듀서 호출, 액션한테 매개변수 값을 전달함
   const down = () => countDispatch({ type: 'DOWN', number: number })
   const reset = () => countDispatch({ type: 'RESET', number: number })
   const up = () => countDispatch({ type: 'UP', number: number })

   return (
      <>
         <input type="button" value="-" onClick={down} />
         <input type="button" value="0" onClick={reset} />
         <input type="button" value="+" onClick={up} />
         <input type="text" value={number} onChange={ChangeNumber} />

         <span>{count}</span>
      </>
   )
}

export default Chapter11
