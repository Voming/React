import logo from './logo.svg';
import './App.css';
import {Routes, Route, Link} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path='/home' element={<Home></Home>}></Route>
      </Routes>
    </div>
  );
}

//function 이지만 class 급으로 동작하므로 첫글자 대문자
function Home(){
  return (
    //한덩어리로 이루어져야함
    //div가 의미가 없을 때 <>로 써줘도 됨
    <div> 
      <h1>홈</h1>
      <div><a href='/insert'>추가</a></div>
    </div>
  );
}

export default App;
