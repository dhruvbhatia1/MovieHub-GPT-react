import { useSelector } from "react-redux";
import { TMDB_IMAGE_URL } from "../utils/constants";

const GptMovieSuggestions = () => {
	const { movieNames, movieResults } = useSelector((store) => store.gpt);
	if (!movieNames) return null;

	return (
		<div className="p-4 m-4 bg-black text-white bg-opacity-[0.87]">
			{movieResults.map((movie) => {
				return (
					<div className="" key={movie.id}>
						<h1 className="font-bold m-2 p-2 text-2xl">{movie.title}</h1>
						<div className="flex flex-row">
							<img
								className="m-2 p-2 w-48"
								src={TMDB_IMAGE_URL + movie.poster_path}
								alt="poster"
							/>
							<div>
								<p className="m-2 p-2 text-xl">{movie.overview}</p>
								<p className="m-2 p-2 text-l">
									Release Date: {movie.release_date}
								</p>
							</div>
						</div>
					</div>
				);
			})}
		</div>
	);
};

export default GptMovieSuggestions;
