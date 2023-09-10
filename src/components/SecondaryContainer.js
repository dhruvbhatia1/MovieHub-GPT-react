import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const SecondaryContainer = () => {
	const movies = useSelector((store) => store.movies);
	return (
		movies.nowPlayingMovies && (
			<div className="bg-black">
				<div className="pl-12 -mt-28 relative z-10">
					<MovieList title={"Now Playing"} movies={movies.nowPlayingMovies} />
					<MovieList title={"Popular"} movies={movies.nowPlayingMovies} />
					<MovieList title={"Top Rated"} movies={movies.nowPlayingMovies} />
					<MovieList title={"Upcoming"} movies={movies.nowPlayingMovies} />
				</div>
			</div>
		)
	);
};

export default SecondaryContainer;
