import React from "react";
import InputBox from "./components/InputBox"
import PhoneList from "./components/PhoneList"
import './App.css';

function App() {
  return (
	  <div className="container">
	  	  <InputBox />		  
		  <PhoneList />
	  </div>
  );
}

export default App;
