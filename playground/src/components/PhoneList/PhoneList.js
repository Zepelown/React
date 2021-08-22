import React from "react";
import styled from "styled-components";
import PhoneItem from "../PhoneItem";

const PhoneWrapper = styled.div`
	display: flex;
	flex-direction: column;
	padding-bottom: 50px;
`;

const PhoneList = ({ list}) => {
	return (
		<PhoneWrapper>
			<PhoneItem {...list["0"]} />
			<PhoneItem {...list["1"]}/>
			<PhoneItem {...list["2"]}/>
			<PhoneItem {...list["3"]}/>
			<PhoneItem {...list["4"]}/>
		</PhoneWrapper>
	)
}

export default PhoneList;