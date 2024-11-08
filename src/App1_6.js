//import Chapter2 from './Chapter2'
// import Chapter3 from './Chapter3'
// import Chapter4 from './Chapter4'
// import Chapter5 from './Chapter5'
// import Chapter6 from './Chapter6'
import Chapter6_2 from './Chapter6_2'

function App() {
   // 함수를 분리해서 넘기기
   //  const func = (a, b) => {
   //     return a + b
   //  }

   // return <Chapter2 />
   // 문자열 말고는 무조건 다 중괄호 => {}
   //  return <Chapter3 name="하서" num={100} arr={[1, 2, 3]} json={{ react: '리액트' }} func={func}/>

   // 함수를 분리하지 않고 넘기기
   //  return <Chapter3 arr={[1, 2, 3]} json={{ react: '리액트' }} func={(a, b) => a + b} />

   // return <Chapter4 />
   //  return <Chapter5 />
   // return <Chapter6 />
   return <Chapter6_2 />
}
export default App
