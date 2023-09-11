import { useEffect } from "react";
import { TMDB_API_OPTIONS } from "../utils/constants";
import { addTrailer } from "../utils/movieSlice";
import { useDispatch, useSelector } from "react-redux";

const useMovieTrailer = (movieId) => {
	const dispatch = useDispatch();
	const trailerVideo = useSelector((store) => store.movies.trailerVideo);
	useEffect(() => {
		!trailerVideo && getMovieVideos();
	}, []);

	const getMovieVideos = async () => {
		const data = await fetch(
			"https://api.themoviedb.org/3/movie/" +
				movieId +
				"/videos?language=en-US",
			TMDB_API_OPTIONS
		);
		const json = await data.json();
		// console.log(json.results);

		const filterData = json.results.filter((video) => video.type === "Trailer");
		const trailer = filterData ? filterData[0] : json.results[0];
		dispatch(addTrailer(trailer));
	};
};

export default useMovieTrailer;
