import React, { useState } from "react";
import InputBox from "./components/InputBox"
import PhoneList from "./components/PhoneList"
import './App.css';
import { dummyData, nextId, setNextId } from "./lib/dummyData.js"
import useInput from './lib/useInput'

const App = () => {
	const [data, setData] = useState(dummyData);
	const [name, setName, onChangeName] = useInput("");
	const [phone, setPhone, onChangePhone] = useInput("");
	
	const handleSubmit = () => {
		if (name === "" || phone === "") return;
		
		setData({
			...data,
			[nextId]: {
				id: String(nextId),
				name,
				phone
		}
		});
		setName("");
		setPhone("");
		
		setNextId();
	};
	
	const handleRemove = id => {
		const { [id]: _, ...dummyData} = data;
		setData(dummyData);
	}
	
	return (
		<div className="container">
			<InputBox
				name={name}
				phone={phone}
				onChangeName={onChangeName}
				onChangePhone={onChangePhone}
				onSubmit={handleSubmit}
			/>
			<PhoneList list={data} deleteItem={handleRemove}/>
		</div>
	)
}



/*class App extends Component {
	state = {
		dummyData,
		name: "",
		phone: ""
	};

	handleInput = e => {
		this.setState({
			[e.target.name]: e.target.value
		})
	};
	
	handleSubmit = () => {
		const { dummyData, name, phone } = this.state;
		
		if (name === "" || phone == "") return;
		
		this.setState({
			dummyData: {
				...dummyData,
				[nextId]: {
					id: nextId,
					name,
					phone
				}
			},
			name: "",
			phone: ""
		});
		
		setNextId();
	}
	
	handleRemove = id => {
		const { [id]: _, ...dummyData } = this.state.dummyData;
		
		this.setState({dummyData});
	}

	render() {
		const { handleInput, handleSubmit, handleRemove } = this;
		const { dummyData, name, phone } = this.state;
		
		return (
			<div className="container">
				<InputBox
					name={name}
					phone={phone}
					onChange={handleInput}
					onSubmit={handleSubmit}
				/>
				<PhoneList list={dummyData} deleteItem={handleRemove}/>
			</div>
		);
	}
} */

export default App;
