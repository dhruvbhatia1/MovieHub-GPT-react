import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { signOut, onAuthStateChanged } from "firebase/auth";
import { auth } from "../utils/firebase";
import { addUser, removeUser } from "../utils/userSlice";
import { useDispatch } from "react-redux";
import { LOGO, USER_ICON } from "../utils/constants";
import LogoutIcon from "@mui/icons-material/Logout";

const Header = () => {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const user = auth.currentUser;
	const handleSignOut = () => {
		signOut(auth)
			.then(() => {})
			.catch((error) => {
				navigate("/error");
			});
	};

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

	return (
		<div className="absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between max-w-full">
			<img className="w-44" src={LOGO} alt="logo" />
			{user && (
				<div className="flex p-2">
					<img className="w-12 h-12" src={USER_ICON} alt="user-icon" />
					<button onClick={handleSignOut} className="font-bold text-white ml-1">
						Sign Out <LogoutIcon />
					</button>
				</div>
			)}
		</div>
	);
};

export default Header;
