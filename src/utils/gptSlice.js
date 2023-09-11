import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
	name: "gpt",
	initialState: {
		showGptSearch: false,
	},
	reducers: {
		toggleGptSearch: (state) => {
			state.showGptSearch = !state.showGptSearch;
		},
		setGptTrue: (state) => {
			state.showGptSearch = true;
		},
		setGptFalse: (state) => {
			state.showGptSearch = false;
		},
	},
});

export const { toggleGptSearch, setGptTrue, setGptFalse } = gptSlice.actions;
export default gptSlice.reducer;
