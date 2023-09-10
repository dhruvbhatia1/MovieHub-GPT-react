import { TMDB_IMAGE_URL } from "../utils/constants";

const MovieCard = ({posterPath}) => {
	return (
		<div className="w-48 mb-4 pr-4 hover:w-52 hover:mb-0 duration-300">
			<img src={TMDB_IMAGE_URL+posterPath} alt="movie card" />
		</div>
	);
};

export default MovieCard;
