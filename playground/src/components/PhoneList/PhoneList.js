import React from "react";
import "./PhoneList.css";
import PhoneItem from "../PhoneItem";

const PhoneList = () => {
	return (
	<div className="phone_list">
		<PhoneItem/>
		<PhoneItem/>
		<PhoneItem/>
	</div>
	
	);
};

export default PhoneList;