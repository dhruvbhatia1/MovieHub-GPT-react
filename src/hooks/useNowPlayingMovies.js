import { TMDB_API_OPTIONS } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addNowPlayingMovies } from "../utils/movieSlice";
import { useEffect } from "react";

const useNowPlayingMovies = () => {
	const dispatch = useDispatch();
	useEffect(() => {
		getNowPlayingMovies();
	}, []);

	const getNowPlayingMovies = async () => {
		const data = await fetch(
			"https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1",
			TMDB_API_OPTIONS
		);
		const json = await data.json();
		// console.log(json.results);
		dispatch(addNowPlayingMovies(json.results));
	};
};

export default useNowPlayingMovies;
