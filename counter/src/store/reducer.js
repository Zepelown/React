const INCREASE = "INCREASE";
const DECREASE = "DECREASE";

export const increase = number => ({
	type: INCREASE,
	payload: number
})

export const decrease = number => ({
	type: INCREASE,
	payload: number	
})

const initialState = {
	number: 0
}

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case "INCREASE":
			return { number: action.payload};
		case "DECREASE":
			return { number: action.payload};
		default:
			return state;
	}
}

export default reducer;