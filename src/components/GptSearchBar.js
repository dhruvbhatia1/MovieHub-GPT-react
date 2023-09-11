import SearchIcon from "@mui/icons-material/Search";

const GptSearchBar = () => {
	return (
		<div className="pt-[6%] flex justify-center">
			<form className="bg-black w-1/2 grid grid-cols-12 rounded-xl">
				<input
					type="text"
					className="p-4 m-4 col-span-10 rounded-xl"
					placeholder="What would you like to watch today? "
				/>
				<button className="py-2 px-4 m-4 bg-red-600 text-white rounded-full col-span-2">
					<SearchIcon />
				</button>
			</form>
		</div>
	);
};

export default GptSearchBar;
