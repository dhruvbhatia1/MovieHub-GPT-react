import { useSelector } from "react-redux";
import useMovieTrailer from "../hooks/useMovieTrailer";

const VideoBackground = ({ movieId }) => {
	// fetch trailer video
	useMovieTrailer(movieId);
	const trailer = useSelector((store) => store.movies?.trailerVideo);

	return (
		<div className="w-[100%]">
			<iframe
        className="w-[100%] aspect-video"
				src={"https://www.youtube.com/embed/" + trailer?.key+"?autoplay=1&mute=1&loop=1&controls=0"}
				title="YouTube video player"
				allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
			></iframe>
		</div>
	);
};

export default VideoBackground;
