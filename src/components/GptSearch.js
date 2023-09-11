import React from "react";
import GptSearchBar from "./GptSearchBar";
import GptMovieSuggestions from "./GptMovieSuggestions";
import { BACKGROUND_IMAGE } from "../utils/constants";

const GptSearch = () => {
	return (
		<>
			<div className="fixed -z-10">
				<img className="h-screen object-cover md:h-auto" src={BACKGROUND_IMAGE} alt="background" />
			</div>
			<div>
				<GptSearchBar />
				<GptMovieSuggestions />
			</div>
		</>
	);
};

export default GptSearch;
