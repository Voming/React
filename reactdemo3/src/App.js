import logo from './logo.svg';
import './App.css';
import { Routes, Route, Link, BrowserRouter } from "react-router-dom";
import Footer from './components/common/footer';
import { useState } from 'react';

function App() {
  //DB에서 읽은 데이터를 useState에 저장
  //useStae 사용
  const [a, b] = ['aaa', 'bbb'];
  const [k1, setK1] = useState(); //두번쨰 있는 건 콜백 function이름

  // 항목 1개 데이터 저장된 공간-insert 하러 갈 데이터
  const [newItem, setNewItem] = useState({
    name: "a",
    price: "1000",
    amount: "10"
  });

  //항목 한개의 데이터 -selectone
  const [item, setItem] = useState({
    name: "a",
    price: "1000",
    amount: "10"
  });

  console.log(item);
  // setItem({
  //   name: "b",
  //   price: "2000",
  //   amount: "20"
  // });
  console.log(item);


  // - selectlist
  const [items, setItems] = useState([
    {
      name: "a",
      price: "1000",
      amount: "10"
    },
    {
      name: "b",
      price: "2000",
      amount: "20"
    },
    {
      name: "c",
      price: "3000",
      amount: "30"
    }
  ]);

  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path='/home' element={<Home></Home>} />
          <Route path='/list' element={<List></List>} />
          <Route path='/insert' element={<Insert></Insert>} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );


  //function 이지만 class 급으로 동작하므로 첫글자 대문자
  function Home() {
    return (
      //한덩어리로 이루어져야함
      //div가 의미가 없을 때 <>로 써줘도 됨
      <div>
        <h1>홈</h1>
        <div><a href="/home">홈</a></div>
        <div><Link to="/Insert">link로 추가</Link></div>
        <Insert />
        <List />

      </div>
    );
  }

  function List() {
    return (
      <div>
        <h1>리스트</h1>
        <div><a href="/list">리스트</a></div>
        <div><Link to="/Home">link-home</Link></div>
        <div><Link to="/Insert">link-insert</Link></div>
        <div>
          <table>
            <thead>
              <tr>
                <td>이름</td>
                <td>가격</td>
                <td>수량</td>
              </tr>
            </thead>
            { //html 태그 사이 중괄호 사용하면 js 문법 사용 가능해짐
              items.map((dto) =>{
                return (
                  <tbody>
                    <td>{dto.name}</td>
                    <td>{dto.price}</td>
                    <td>{dto.amount}</td>
                  </tbody>
                );
              }) //;이 없어야함
            }

          </table>
        </div>
      </div>
    );
  }

  function Insert() {
    return (
      <div>
        <h1>추가</h1>
        <div><a href="/insert">추가</a></div>
        <div><Link to="/Home">link-home</Link></div>
        <div><Link to="/List">link=List</Link></div>
        <table>
          <thead>
            <tr>
              <td>이름 <input type='text'></input></td>
              <td>가격 <input type='text'></input></td>
              <td>수량 <input type='text'></input></td>
            </tr>
          </thead>
        </table>
      </div>
    );
  }
}
export default App;

