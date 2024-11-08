import { useState, useRef, useCallback } from 'react'

function Chapter5() {
   const [names, setNames] = useState([
      { id: 1, text: '눈사람' },
      { id: 2, text: '얼음' },
      { id: 3, text: '눈' },
      { id: 4, text: '바람' },
   ])

   const [inputText, setInputText] = useState('')

   // id를 바꾸는 2가지 방법 (1. state 2. useRef)
   // const[nextId, setNextId] = useState(5)
   const nextId = useRef(5)

   const onChange = useCallback((e) => setInputText(e.target.value), [])

   // key를 꼭 줘야함
   const nameList = names.map((name) => (
      <li
         key={name.id}
         onDoubleClick={() => {
            onRemove(name.id)
         }}
      >
         {name.text}
      </li>
   ))

   // concat 사용 이유: 새로운 데이터를 만들어주는 것이기 때문에 불변성 유지를 위해
   const onClick = useCallback(() => {
      const nextNames = names.concat({
         id: nextId,
         text: inputText,
      })

      setNames(nextNames)
      // state를 사용했을 경우 : setNextId(nextId + 1)
      nextId.current += 1
      setInputText('')
   }, [names])
   // ↑ names state가 바뀔 때만 함수를 실행

   const onRemove = useCallback(
      (id) => {
         const nextNames = names.filter((name) => name.id !== id)
         setNames(nextNames)
      },
      [names]
   )

   return (
      <>
         <input value={inputText} onChange={onChange} />
         <button onClick={onClick}>추가</button>
         <ul>{nameList}</ul>
      </>
   )
}

export default Chapter5
