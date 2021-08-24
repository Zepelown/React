import React from "react";
import styles from "./InputBox.module.css";

const InputBox = ( { name, phone, onChange, onSubmit } ) => {
	return (
		<div className={styles.input_boxes}>
			<div className={styles.input_box}>
				<div className={styles.input_box_name}>이름</div>
				<input
					type="text"
					placeholder="이름"
					name="name"
					className={styles.input_box_input}
					onChange={onChange}
					value={name}
				/>
			</div>
			<div className="input_box">
				<div className={styles.input_box_name}>전화번호</div>
				<input
					type="text"
					placeholder="전화번호"
					name="phone"
					className={styles.input_box_input}
					onChange={onChange}
					value={phone}
				/>
			</div>
			<button className={styles.input_box_button}
					onClick={onSubmit}>
				저장
			</button>
		</div>
	);
}

export default InputBox;