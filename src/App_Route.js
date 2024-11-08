import { Route, Routes, Link, NavLink, useParams } from 'react-router-dom'
import './App.css'

function Home() {
   return (
      <div>
         <h2>Home</h2>
         Home...
      </div>
   )
}

function Topics() {
   return (
      <div>
         <h2>Topics</h2>
         Topics...
      </div>
   )
}

function Contact() {
   var params = useParams()
   var path_para = params.path_para
   return (
      <div>
         <h2>Contact</h2>
         Contact...
         {path_para}
      </div>
   )
}

function PathTest() {
   var params = useParams()
   var path_para = params.path_para
   return (
      <div>
         <h2>PathTest</h2>
         {path_para}
      </div>
   )
}

function App() {
   return (
      <div>
         <h1>리액트 라우터</h1>
         <ul>
            <li>
               <NavLink to="/">Home</NavLink>
            </li>
            <li>
               <NavLink to="/topics">Topics</NavLink>
            </li>
            <li>
               <NavLink to="/contact/1">Contact</NavLink>
            </li>
            <li>
               <NavLink to="test/1">PathTest</NavLink>
            </li>
            <li>
               <NavLink to="test/2">PathTest</NavLink>
            </li>
         </ul>

         <Routes>
            {/* localhost:3000/ => Home 컴포넌트를 Routes 컴포넌트 안에서 보여줌 */}
            <Route path="/" element={<Home />} />

            {/* localhost:3000/topics => Topics 컴포넌트 */}
            <Route path="/topics" element={<Topics />} />

            {/* localhost:3000/contact => Contact 컴포넌트 */}
            <Route path="/contact/:path_para" element={<Contact />} />

            {/* localhost:3000/test/뭐가올지모름 => PathTest 컴포넌트 */}
            <Route path="/test/:path_para" element={<PathTest />} />

            {/* <Route path="/*" element={'잘못된 경로입니다'} /> */}
         </Routes>
      </div>
   )
}
export default App
