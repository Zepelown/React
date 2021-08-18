import React from "react";
import InputBox from "./components/InputBox"
import './App.css';

function App() {
  return (
	  <div className="container">
	  	  <InputBox />		  
		  <div className="phone_list">
		  	<div className="phone_item">
				<div className="phone_item_left">
					<div className="phone_item_name">홍길동</div>
					<div className="phone_item_phone">010-0000-0000</div>
				</div>
				<div className="phone_item_right">
					<button>삭제</button>
				</div>
			</div>
			<div className="phone_item">
				<div className="phone_item_left">
					<div className="phone_item_name">홍길동</div>
					<div className="phone_item_phone">010-0000-0000</div>
				</div>
				<div className="phone_item_right">
					<button>삭제</button>
				</div>
			</div>
			<div className="phone_item">
				<div className="phone_item_left">
					<div className="phone_item_name">홍길동</div>
					<div className="phone_item_phone">010-0000-0000</div>
				</div>
				<div className="phone_item_right">
					<button>삭제</button>
				</div>
			</div>
		  </div>
	  </div>
  );
}

export default App;
