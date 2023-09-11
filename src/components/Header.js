import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { signOut, onAuthStateChanged } from "firebase/auth";
import { auth } from "../utils/firebase";
import { addUser, removeUser } from "../utils/userSlice";
import { useDispatch, useSelector } from "react-redux";
import { LOGO, USER_ICON } from "../utils/constants";
import LogoutIcon from "@mui/icons-material/Logout";
import SearchIcon from "@mui/icons-material/Search";
import { toggleGptSearch } from "../utils/gptSlice";
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';

const Header = () => {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const user = auth.currentUser;
	useEffect(() => {
		const unsubscribe = onAuthStateChanged(auth, (user) => {
			if (user) {
				// User is signed in
				const { uid, email, displayName } = user;
				dispatch(
					addUser({
						uid: uid,
						email: email,
						displayName: displayName,
					})
				);
				navigate("/browse");
			} else {
				// User is signed out
				dispatch(removeUser());
				navigate("/");
			}
		});

		return () => unsubscribe();
	}, []);
	const handleSignOut = () => {
		signOut(auth)
			.then(() => {})
			.catch((error) => {
				navigate("/error");
			});
	};
	const handleSearchClick = () => {
		dispatch(toggleGptSearch());
	};
	const showGPTSearch = useSelector((store) => store.gpt.showGptSearch);
	return (
		<div className="absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex flex-col md:flex-row justify-between max-w-full overflow-y-clip">
			<img className="w-44 mx-auto md:mx-0" src={LOGO} alt="logo" />
			{user && (
				<div className="flex p-2 justify-between">
					<button
						className="text-white font-semibold px-2 my-2 mx-2 rounded-full bg-purple-600"
						onClick={handleSearchClick}
					>
						{showGPTSearch ? "Home " : "GPT-Search "}
						{showGPTSearch ? <HomeOutlinedIcon /> : <SearchIcon />}
					</button>
					<img className="w-12 h-12 invisible md:visible" src={USER_ICON} alt="user-icon" />
					<button onClick={handleSignOut} className="font-bold text-white ml-2">
						Sign Out <LogoutIcon />
					</button>
				</div>
			)}
		</div>
	);
};

export default Header;
