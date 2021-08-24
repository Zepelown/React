import React from "react";
import styled from "styled-components";
import PhoneItem from "../PhoneItem";

const PhoneWrapper = styled.div`
	display: flex;
	flex-direction: column;
	padding-bottom: 50px;
`;

const PhoneList = ({ list, deleteItem }) => {
	return (
		<PhoneWrapper>
			{Object.values(list).map(item => {
				return <PhoneItem 
						{...item} 
						key={item.id}
						onClick={deleteItem}
						/>
			})}
	
		</PhoneWrapper>
	)
}

export default PhoneList;

/*
map함수는 callbackFunction을 실행한 결과를 가지고 새로운 배열을 만들 때 사용한다.
*/