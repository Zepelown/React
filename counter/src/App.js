import React from 'react'
import CountButton from "./components/CountButton";
import Number from "./components/Number";
import styled from "styled-components";
import { Provider, connect } from "react-redux";
import * as counter from "./store/reducer";
import { bindActionCreators } from "redux";

const Wrapper = styled.div`
	margin: 0 auto;
	display: flex;
	flex-direction: column;
	align-items: center;
	width: 100px
	margin-top: 100px;
`;

const ButtonWrapper = styled.div`
	width: 100%;
	display: flex;
	justify-content: space-between;
	margin-bottom: 50px;
`;

const App = ({ number, counter }) => {
	return (
		<Wrapper>
			<ButtonWrapper>
				<CountButton onClick={() => 
					counter.increase(number + 1)}
					text="+"/>
				<CountButton onClick={() => 
					counter.decrease(number - 1)}
					text="-"/>
			</ButtonWrapper>
			<Number number={number}/>
		</Wrapper>
	)
}

const mapStateToProps = state => ({
	number: state.number
})

const mapDispatchToProps = dispatch => ({
	counter: bindActionCreators(counter, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(App);







/*const App = () => {
	const [ number, setNumber] = useState(0);
	
	훅스에서 사이클 관리법
	useEffect(() => {
		console.log("useEffect -> componentDidMount");
		
		return () => {
			console.log("useEffect -> componentWillUnmount");
		}
	}, []);
	
	useEffect(() => {
		console.log(`componentDidUpdate (number) -> ${number}`);
	}, [number]);
	
	useEffect(() => {
		console.log("useEffect -> componentDidUpdate")
	})
	
	return (
		<Wrapper>
			<ButtonWrapper>
				<CountButton onClick={ } text="+"/>
				<CountButton onClick={} text="-"/>
			</ButtonWrapper>
			<Number number={number} />
		</Wrapper>
	)
}*/

/*
이전 클래스형태
class App extends Component {
	state = { 
		number : 0
	};

	constructor(props) {
		super(props);
		console.log("constructor 호출");
	}

	componentDidMount() {
		console.log("componentDidMount 호출");
	}

	shouldComponentUpdate(nextProps, nextState) {
		console.log("shouldComponentUpdate 호출");
		if (nextState.number % 3 === 0) return false;
		return true;
	}

	componentDidUpdate(prevProps, prevState) {
		console.log("componentDidUpdate 호출");
	}

	countUp = () => {
		this.setState(
		({ number}) => ({
			number: number + 1
		}));
	}
	
	countDown = () => {
		const { number } = this.state
		this.setState({ number: number - 1})
	}

	render() {
		const { number } = this.state;
		const { countUp, countDown} = this;
		
		return (
			<Wrapper>
				<ButtonWrapper>
					<CountButton onClick={countUp} text="+"/>
					<CountButton onClick={countDown} text="-"/>				
				</ButtonWrapper>
				<Number number={number}/>
			</Wrapper>
		)
	}
}

*/

