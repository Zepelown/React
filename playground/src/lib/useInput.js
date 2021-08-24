//Custom Hook
//기본적으로 파일 앞에 use를 쓰는 것이 관례

import { useState } from 'react';

const useInput = (initialValue) => {
	const [value, setValue] = useState(initialValue);
	
	const onChange = e => {
		const { target: { value } } = e;
		setValue(value);
	}
	
	return [ value, setValue, onChange];
}

export default useInput