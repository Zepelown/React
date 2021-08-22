import React, { Component } from "react";
import InputBox from "./components/InputBox"
import PhoneList from "./components/PhoneList"
import './App.css';
import { dummyData } from "./lib/dummyData.js"

class App extends Component {
	state = dummyData;

	render() {
		return (
			<div className="container">
				<InputBox/>
				<PhoneList list={this.state}/>
			</div>
		);
	}
}

export default App;
