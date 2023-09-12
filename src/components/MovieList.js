import { YOUTUBE_SEARCH_RESULT_URL } from "../utils/constants";
import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
	// console.log(movies);
	return (
		<div className="px-6 text-white">
			<h1 className="py-4 text-3xl font-semibold">{title}</h1>
			<div className="flex overflow-x-scroll">
				<div className="flex">
					{movies?.map((movie) => (
						<a
							href={YOUTUBE_SEARCH_RESULT_URL + movie.title + " Movie Trailer"}
							key={movie.id}
							target="_blank"
						>
							<MovieCard posterPath={movie.poster_path} />
						</a>
					))}
				</div>
			</div>
		</div>
	);
};

export default MovieList;
