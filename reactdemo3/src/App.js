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

  // 사용자 입력값을 넣어줄 데이터 공간-insert 하러 갈 데이터
  const [newItem, setNewItem] = useState({
    name: "",
    price: "",
    amount: ""
  });

  //항목 한개 저장된 데이터 공간 -selectone
  const [item, setItem] = useState({
    name: "a",
    price: "1000",
    amount: "10"
  });

  // console.log(item);
  // setItem({
  //   name: "b",
  //   price: "2000",
  //   amount: "20"
  // });
  // console.log(item);


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
          <Route path='/home' element={<Home />} />
          <Route path='/list' element={<List />} />
          <Route path='/insert' element={<Insert />} />
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
        <div><Link to="/Insert">link-insert</Link></div>
        <div><Link to="/List">list-insert</Link></div>
        <Insert />
        <List />

      </div>
    );
  }

  function onDeleteHandler(selectedName) {
    console.log("onDeleteHandler");
    console.log(selectedName); 
    // filter(조건식)
    let filteredItems = items.filter((it) => it.name != selectedName);

    console.log(filteredItems);

    setItems(filteredItems);
  }

  function List() {
    return (
      <div>
        <h1>리스트</h1>
        <div><Link to="/Home">link-home</Link></div>
        <div><Link to="/Insert">link-insert</Link></div>
        <div>
          <table>
            <thead>
              <tr>
                <th>이름</th>
                <th>가격</th>
                <th>수량</th>
              </tr>
            </thead>
            <tbody>
              { //html 태그 사이 중괄호 사용하면 js 문법 사용 가능해짐
                items.map((dto) => {
                  return (
                    <tr key={dto.name}>
                      <td>{dto.name}</td>
                      <td>{dto.price}</td>
                      <td>{dto.amount}</td>
                      <td><input type="button" value="삭제" data-name={dto.name} onClick={()=>{
                        //콜백함수모양으로 호출
                        console.log(dto.name); 
                        onDeleteHandler(dto.name);}
                        } /></td>
                    </tr>
                  );
                }) //;이 없어야함
              }
            </tbody>
          </table>
        </div>
      </div>
    );
  }

  function onClickHandler(e) {
    console.log(newItem);
    console.log(items);
    //TODO : DB에 저장하러 가기
    //items에 추가하기
    // items.push(newItem);
    // console.log(items); 
    // setItems([items]); //rendering 다시 되지 않음 //배열 모양이고 Object모양이어야함
    // 기존에 입력한게 유지 되면서 새로 추가되게 하기

    //기존에 데이터 값 유지되면서 새로운 값 추가하기 - item 사용하는 부분 rendering 다시됨
    setItems([...items, newItem]);  //버튼 누르면 바로 렌더링 됨
    //입력칸 비우기 - newItem값을 변경해야함
    setNewItem({
      name: "",
      price: "",
      amount: ""
    });


    // 일전시간 뒤에 실행해주기
    // const timeoutId = setTimeout(()=> {
    //   console.log("3초 후에 실행됨");
    //   const tempItem = {name : "t", price:"100", amount:"20"};
    //   setItems([...items, tempItem]);
    // }, 3000);
    // clearTimeout

  }

  // function onChangeHandler(){} //이렇게 사용하지 않음 => 선언된 위치가 중요하지 않음
  function onChangeHandler(e) {  //함수를 나타내는 다른 방법 => 변수에 담아서 사용한다면 위치가 중요함 
    //현재 발생한 event값을 e로 받아옴
    // console.log(e);
    // console.log(e.target);   //e.target는 Object모양임 (value:"", react:"" ~~~~)형태의 모양 -> 
    // console.log(e.target.name);
    // console.log(e.target.value);

    // const [a,b] = ["a1","b1"];
    // const {c,d} = {d:"d1", c:"c1"}; //순서 바뀌어도 괜찮음
    // console.log(b);
    // console.log(d);
    console.log("------a");
    console.log(newItem);
    const { name, value } = e.target;
    // const tempItemObj = {name:name, value:value}; //의 형태로 넣어주면 안됨
    setNewItem({ ...newItem, [name]: value }); //newItem - useState에 값 변경했지만
    //이 시점에 바로 확인 안됨 
    //또한 State가 변경되면 변경시킨걸 다시 렌더링하면서 보여줌(입력한게 없어지고 포커스도 잃음)
    console.log(newItem);
    console.log("------b");
  }

  function Insert() {
    //{} 중괄호가 나오면 자바스크립트 코드임을 알면 됨
    return (
      <div>
        <h1>추가</h1>
        <div><Link to="/Home">link-home</Link></div>
        <div><Link to="/List">link=List</Link></div>
        <table>
          <thead>
            <tr>
              <th>이름</th>
              <th>가격</th>
              <th>수량</th>
            </tr>
          </thead>
          <thead>
            <tr>
              <td><input type='text' autoFocus name="name" onChange={onChangeHandler} value={newItem.name}></input></td>
              <td><input type='text' autoFocus name="price" onChange={onChangeHandler} value={newItem.price}></input></td>
              <td><input type='text' autoFocus name="amount" onChange={onChangeHandler} value={newItem.amount}></input></td>
              <td><input type='button' value="리스트에 등록" onClick={onClickHandler}></input></td>
            </tr>
          </thead>
        </table>
      </div>
    );
  }
  //+) 함수 부를때 "onChangeHandler();" 로 사용하지 않고 {onChangeHandler}로 사용함

}
export default App;

