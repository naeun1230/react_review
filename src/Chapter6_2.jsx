import React, { useState, useMemo } from 'react'

// 평균 구하는 함수
function getAverage(numbers) {
   console.log('평균값 계산...')

   // numbers = [1, 2, 3]
   if (numbers.length === 0) return 0

   // 배열에 사용할 수 있는 함수, 누적합계
   // a, b = 1, 2 -> a + b = 3 -> a, b = 3, 3 (a+b 더한 값이 a로 감)
   const sum = numbers.reduce((a, b) => a + b)

   return sum / numbers.length // 평균
}

function Chapter6_2() {
   const [list, setList] = useState([])
   const [number, setNumber] = useState('')

   const onChange = (e) => setNumber(e.target.value)

   // list state에 입력한 값 추가
   const onInsert = () => {
      const nextList = list.concat(Number(number))
      setList(nextList)
      setNumber('')
   }

   // list state가 바뀔 때만 getAverage(list) 함수 실행!
   // list state는 등록 버튼을 누를 때 바뀜
   const avg = useMemo(() => {
      return getAverage(list)
   }, [list])

   return (
      <>
         <input type="text" value={number} onChange={onChange} />
         <button onClick={onInsert}>등록</button>
         <ul>
            {list.map((value, index) => (
               <li key={index}>{value}</li>
            ))}
         </ul>
         <div>
            <b>평균값: {avg}</b>
         </div>
      </>
   )
}
export default Chapter6_2
