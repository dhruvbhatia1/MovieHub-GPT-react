import SearchIcon from "@mui/icons-material/Search";
import { useRef } from "react";
import openai from "../utils/openai";
import { TMDB_API_OPTIONS } from "../utils/constants";
import { addGptMovieResult } from "../utils/gptSlice";
import { useDispatch } from "react-redux";

const GptSearchBar = () => {
	const searchText = useRef(null);
	const dispatch = useDispatch();

	const handleGptSearch = async (e) => {
		e.preventDefault();
		console.log(searchText.current.value);
		if (searchText.current.value === "" || searchText.current.value === null) {
			return;
		}
		const query =
			"Act as a movie recommendation system and suggest some movies for the query: " +
			searchText.current.value +
			". Only give me 5 movie names,seperated by # like the example given ahead. Example Result: Avengers#Crazy Stupid Love#Civil War#Spiderman#Batman";
		// make an api call to openai to get movie results
		const gptResults = await openai.chat.completions.create({
			messages: [{ role: "user", content: query }],
			model: "gpt-3.5-turbo",
		});
		if (!gptResults.choices) {
			// TODO: Write Error Handling
		}

		console.log(gptResults.choices?.[0]?.message?.content);
		const gptMovies = gptResults.choices?.[0]?.message?.content?.split("#");
		// for each movie, make an api call to tmdb to get movie details
		const promiseArray = gptMovies.map((movie) => searchMovieTMDB(movie)); // array of promises

		const tmdbResults = await Promise.all(promiseArray);
		console.log(tmdbResults);

		dispatch(
			addGptMovieResult({ movieNames: gptMovies, movieResults: tmdbResults })
		);
	};

	const searchMovieTMDB = async (movieName) => {
		const data = await fetch(
			"https://api.themoviedb.org/3/search/movie?query=" +
				movieName +
				"&include_adult=false&language=en-US&page=1",
			TMDB_API_OPTIONS
		);
		const json = await data.json();
		return json.results;
	};
	return (
		<div className="pt-[6%] flex justify-center">
			<form
				className="bg-black w-1/2 grid grid-cols-12 rounded-xl"
				onSubmit={handleGptSearch}
			>
				<input
					ref={searchText}
					type="text"
					className="p-4 m-4 col-span-10 rounded-xl"
					placeholder="What would you like to watch today? "
				/>
				<button className="py-2 px-4 m-4 bg-red-600 text-white rounded-full col-span-2">
					<SearchIcon />
				</button>
			</form>
		</div>
	);
};

export default GptSearchBar;
