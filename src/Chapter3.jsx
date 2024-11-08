import React, { useState, useCallback } from 'react'

function Chapter3({ name = '하서', num = 0, arr, json, func }) {
   // 초기값 주는 방법 ↑
   //  =  const { name, num, arr, json, func } = props

   const [text, setText] = useState('')
   // ★ state가 바뀌면 컴포넌트가 재렌더링(= function 컴포넌트 코드가 다시 실행)된다!!

   // 함수를 분리해서 써야 useCallback 사용하기 편리함
   // useCallback : 함수 재생성 방지, 최적화시킴 (컴포넌트 안에 있는 함수들)
   const onChange = useCallback((e) => setText(e.target.value), [])

   return (
      <div>
         <p>{name}</p>
         <p>{num}</p>
         {/* 배열은 보통 map이나 filter로 꺼내서 출력 ↓ */}
         <p>{arr.map((num) => num)}</p>
         <p>{json.react}</p>
         {/* 함수에서 return한 결과 출력 */}
         <p>{func(1, 2)}</p>

         <input
            type="text"
            // value는 state 값
            value={text}
            onChange={onChange}
         />
         <p>{text}</p>
      </div>
   )
}

export default Chapter3
