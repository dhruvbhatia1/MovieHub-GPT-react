import React from "react";
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';

const VideoTitle = ({ title, overview }) => {
	return (
		<div className="w-[100%] aspect-video pt-[20%] px-24 absolute text-white bg-gradient-to-r from-stone-700">
			<h1 className="text-6xl font-bold">{title}</h1>
			<p className="py-6 text-lg w-1/4">{overview}</p>
			<div className="">
				<button className="bg-white text-black p-3 px-11 text-xl hover:bg-opacity-80 rounded-lg"><PlayArrowIcon sx={{ fontSize: 30 }}/> Play</button>
				<button className="mx-2 bg-gray-500 bg-opacity-60 text-white p-3 px-11 text-xl hover:bg-opacity-40 rounded-lg"><InfoOutlinedIcon sx={{ fontSize: 30 }}/> More Info</button>
			</div>
		</div>
	);
};

export default VideoTitle;
