import { useSelector } from "react-redux";
import { TMDB_IMAGE_URL, YOUTUBE_SEARCH_RESULT_URL } from "../utils/constants";

const GptMovieSuggestions = () => {
	const { movieNames, movieResults } = useSelector((store) => store.gpt);
	if (!movieNames) return null;

	return (
		<div className="p-4 m-4 bg-black text-white bg-opacity-[0.87]">
			{movieResults.map((movie) => {
				return (
					<div className="" key={movie.id}>
						<h1 className="font-bold m-2 p-2 text-xl md:text-2xl">
							{movie.title}
						</h1>
						<div className="flex flex-row justify-center">
							<a
								href={
									YOUTUBE_SEARCH_RESULT_URL + movie.title + " Movie Trailer"
								}
								target="_blank"
							>
								<div className="w-44 md:w-48">
									<img
										className="m-2 p-2 w-full"
										src={TMDB_IMAGE_URL + movie.poster_path}
										alt="poster"
									/>
								</div>
							</a>

							<div className="hidden md:block">
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
