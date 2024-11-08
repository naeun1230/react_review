import React, { useState, useEffect } from 'react'

function Chapter6() {
   const [name, setName] = useState('')
   const [nickname, setNickName] = useState('')

   // ★ useEffect 안에 있는 코드가 '언제' 실행되는지 아는 게 중요함!!
   // useEffect는 맨 처음 사이트 접속시 렌더링 직후 무조건 1번 실행된다
   // 1. 컴포넌트가 렌더링 될 때마다(정확하게는 리렌더링이 된 직후) 실행
   //    useEffect(() => {
   //       console.log('렌더링이 완료되었습니다.')
   //       // name: name => key와 변수명이 같을 때 한 번만 써도 됨
   //       console.log({ name, nickname })
   //    })

   // 2. 맨 처음 렌더링 될 때만 실행되고(렌더링 직후), 재렌더링 될 때는 실행 X
   //    useEffect(() => {
   //       console.log('렌더링이 완료되었습니다.')
   //       console.log({ name, nickname })
   //    }, [])

   // 3. 특정 값이 변경될 때만 실행(렌더링 직후)
   //    useEffect(() => {
   //       console.log('렌더링이 완료되었습니다.')
   //       console.log({ name, nickname })
   //    }, [name])

   // 4. 뒷정리함수: 컴포넌트가 업데이트 되기 직전에 실행(렌더링 되기 직전)
   useEffect(() => {
      console.log('렌더링이 완료되었습니다.')
      console.log({ name, nickname })

      //렌더링되기 직전에 실행
      return () => {
         console.log('컴포넌트가 업데이트 되기 전...')
         console.log(name)
      }
   })

   const onChangeName = (e) => setName(e.target.value)
   const onChangeNickName = (e) => setNickName(e.target.value)

   return (
      <div>
         <div>
            <input type="text" placeholder="name" value={name} onChange={onChangeName} />
            <input type="text" placeholder="nickname" value={nickname} onChange={onChangeNickName} />
         </div>
         <div>
            <div>
               <b>이름: {name}</b>
            </div>
            <div>
               <b>닉네임: {nickname}</b>
            </div>
         </div>
      </div>
   )
}

export default Chapter6
