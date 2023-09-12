import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
	name: "gpt",
	initialState: {
		showGptSearch: false,
		movieResults: null,
		movieNames: null,
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
		addGptMovieResult: (state, action) => {
			const { movieNames, movieResults } = action.payload;
			state.movieNames = movieNames;
			state.movieResults = movieResults;
		},
		clearMovieResultsAndNames: (state) => {
			state.movieNames = null;
			state.movieResults = null;
		},
	},
});

export const {
	toggleGptSearch,
	setGptTrue,
	setGptFalse,
	addGptMovieResult,
	clearMovieResultsAndNames,
} = gptSlice.actions;
export default gptSlice.reducer;
