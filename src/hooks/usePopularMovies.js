import { TMDB_API_OPTIONS } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addPopularMovies } from "../utils/movieSlice";
import { useEffect } from "react";

const usePopularMovies = () => {
	const dispatch = useDispatch();
	useEffect(() => {
		getPopularMovies();
	}, []);

	const getPopularMovies = async () => {
		const data = await fetch(
			"https://api.themoviedb.org/3/movie/popular?language=en-US&page=1",
			TMDB_API_OPTIONS
		);
		const json = await data.json();
		// console.log(json.results);
		dispatch(addPopularMovies(json.results));
	};
};

export default usePopularMovies;
