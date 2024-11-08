import './App.css'

function Chapter2() {
   const name = '하서'

   // css는 JSON 객체
   const style = {
      backgroundColor: 'red',
      fontSize: '48px',
   }

   const number = null //false
   const boolean = true

   return (
      <div>
         {/* 태그 안에 쓸 때는 일반적인 and,or 연산자 */}
         <input type="radio" checked={number || boolean} />
         <input type="radio" checked={number && boolean} />

         {/* true면 b가 출력 */}
         <p>{'리액트' && <h1>리액트입니다.</h1>}</p>
         {/* true면 a가 출력 */}
         <p>{'리액트' || <h1>리액트입니다.</h1>}</p>

         <h1>리액트</h1>
         <h1>{name}</h1>
         {name === '하서' ? <p>하서입니다</p> : <p>하서가 아닙니다.</p>}
         <p style={style}>안녕하세요</p>
         <p
            style={{
               backgroundColor: 'red',
               fontSize: '48px',
            }}
         >
            안녕하세요
         </p>
         <p className="test">안녕하세요</p>
         {/* css파일 따로도 가능, import로 가져와서 사용 가능 */}
      </div>
   )
}

export default Chapter2
