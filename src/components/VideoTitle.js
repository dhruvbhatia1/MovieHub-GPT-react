import React from "react";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import { useSelector } from "react-redux";

const VideoTitle = ({ title, overview }) => {
	const trailerId = useSelector((store) => store.movies?.trailerVideo?.key);
	return (
		<div className="w-[100%] aspect-video pt-[18%] px-10 md:px-24 absolute text-white bg-gradient-to-r from-stone-700">
			<h1 className="text-3xl md:text-6xl w-1/4 md:w-full font-bold">
				{title}
			</h1>
			<p className="hidden md:inline-block py-6 text-lg w-[30%]">{overview}</p>
			<div className="mt-[2%] md:mt-0">
				<a href={"https://youtube-dhruvbhatia.vercel.app/watch?v=" + trailerId}>
					<button className="bg-white text-black p-2 md:p-3 px-5 md:px-10 text-xl hover:bg-opacity-80 rounded-lg">
						<PlayArrowIcon sx={{ fontSize: 30 }} /> Play
					</button>
				</a>
				<button className="hidden md:inline-block md:mx-2 bg-gray-500 bg-opacity-60 text-white p-3 px-9 text-xl hover:bg-opacity-40 rounded-lg">
					<InfoOutlinedIcon sx={{ fontSize: 30 }} /> More Info
				</button>
			</div>
		</div>
	);
};

export default VideoTitle;
