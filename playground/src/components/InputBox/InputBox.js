import React from "react";
import styles from "./InputBox.module.css";

const InputBox = () => {
	return (
		<div className={styles.input_boxes}>
			<div className={styles.input_box}>
				<div className={styles.input_box_name}>이름</div>
				<input
					type="text"
					placeholder="이름"
					name="name"
					className={styles.input_box_input}
				/>
			</div>
			<div className="input_box">
				<div className={styles.input_box_name}>전화번호</div>
				<input
					type="text"
					placeholder="전화번호"
					name="phone"
					className={styles.input_box_input}
				/>
			</div>
			<button className={styles.input_box_button}>저장</button>
		</div>
	);
}

export default InputBox;