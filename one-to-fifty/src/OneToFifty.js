import React, { useState, useEffect, useRef} from "react";
import styled from "styled-components";
import Board from "./Board";

let array = [];
for (let i = 1; i <= 25; i++){
	array.push(i);
}

function OneToFifty() {
	console.log("OneToFifty");
	const [numbers, setNumbers] = useState(array);
	const [gameFlag, setGameFlag] = useState(false);
	const [current, setCurrent] = useState(1);
	const [timeElapsed, setTimeElapsed] = useState(0);
	
	const handleClick = num => {
		console.log(num);
		if(num === current && gameFlag){
			if(num === 50){
				console.log("Success");
			}
			const index = numbers.indexOf(num);
			setNumbers(numbers => [
				...numbers.slice(0, index),
				num <26 ? num + 25 : 0,
				...numbers.slice(index + 1)
			]);
			setCurrent(current => current + 1);
		}
	}
	const startGame = () => {
		setNumbers(shuffleArray(array));
		setCurrent(1);
		setGameFlag(true);
	}
	
	const endGame = () => {
		setGameFlag(false);
	}
	
	return (
		<Container>
			<Board numbers={numbers} handleClick={handleClick}></Board>
			      {/* {gameFlag ? (
        <Timer>{timeElapsed}</Timer>
      ) : (
        <button onClick={startGame}>start</button>
      )} */}
		</Container>
	);
}

const Container = styled.div`
  width: 600px;
  height: 800px;
  border: 1px solid black;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default OneToFifty;