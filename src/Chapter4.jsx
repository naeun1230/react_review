import React, { useState } from 'react'

function Chapter4() {
   const test = 'age'
   const obj = {
      name: '지영',
      [test]: 20,
   }
   //  => 결과: {name: ‘지영’, age: 20}

   const [form, setForm] = useState({
      username: '',
      Message: '',
   })

   const { usename, message } = form

   const onChange = (e) => {
      /*
          form에 있는 데이터를 그대로 가져옴
          nextForm = {
                      username: '',
                      Message:''
                      }
          */

      const nextForm = {
         ...form,
         // ↓ name(username/message)에 따라 데이터가 작성됨
         [e.target.name]: e.target.value,
      }
      setForm(nextForm)
   }

   //  ↓  이렇게 해도 됨
   //       setForm({
   //          ...form,
   //          [e.target.name]: e.target.value,
   //       })
   //    }

   return (
      <>
         <input name="username" value={usename} onChange={onChange} />
         <input name="message" value={message} onChange={onChange} />
      </>
   )
}

export default Chapter4
