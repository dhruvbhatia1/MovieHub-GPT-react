import React, { useRef, useState } from "react";
import Header from "./Header";
import { checkValidData } from "../utils/validate";
import {
	createUserWithEmailAndPassword,
	signInWithEmailAndPassword,
	updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { BACKGROUND_IMAGE } from "../utils/constants";

const Login = () => {
	const [isSignInForm, setIsSignInForm] = useState(true);
	const [errorMessage, setErrorMessage] = useState(null);
	const dispatch = useDispatch();
	const name = useRef(null);
	const email = useRef(null);
	const password = useRef(null);

	const handleButtonClick = () => {
		// validate the form data
		const message = checkValidData(email.current.value, password.current.value);
		setErrorMessage(message);
		if (message) return;
		// sign in or sign up logic
		if (!isSignInForm) {
			// Sign Up
			createUserWithEmailAndPassword(
				auth,
				email.current.value,
				password.current.value
			)
				.then((userCredential) => {
					// Signed in
					const user = userCredential.user;
					updateProfile(user, {
						displayName: name.current.value,
					})
						.then(() => {
							// Profile updated!
							const { uid, email, displayName } = auth.currentUser;
							dispatch(
								addUser({
									uid: uid,
									email: email,
									displayName: displayName,
								})
							);
						})
						.catch((error) => {
							// An error occurred
							setErrorMessage(error.message);
						});
					// console.log(user);

					// ...
				})
				.catch((error) => {
					const errorCode = error.code;
					const errorMessage = error.message;
					setErrorMessage(errorCode + " - " + errorMessage);
					// ..
				});
		} else {
			// Sign In
			signInWithEmailAndPassword(
				auth,
				email.current.value,
				password.current.value
			)
				.then((userCredential) => {
					// Signed in
					// const user = userCredential.user;
					// console.log(user);
					// ...
				})
				.catch((error) => {
					const errorCode = error.code;
					const errorMessage = error.message;
					setErrorMessage(errorCode + " - " + errorMessage);
				});
		}
	};

	const toggleSignInForm = () => {
		setIsSignInForm(!isSignInForm);
	};
	return (
		<div>
			<Header />
			<div className="absolute">
				<img className="h-screen object-cover w-screen" src={BACKGROUND_IMAGE} alt="background" />
			</div>
			<form
				onSubmit={(e) => e.preventDefault()}
				className="w-11/12 md:6/12 lg:w-4/12 absolute px-12 py-6 bg-black my-28 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80"
			>
				<h1 className="font-bold text-2xl md:text-3xl py-4">
					{isSignInForm ? "Sign In" : "Sign Up"}
				</h1>
				{!isSignInForm && (
					<input
						ref={name}
						type="text"
						placeholder="Full Name"
						className="p-4 my-4 w-full bg-gray-500"
					/>
				)}
				<input
					ref={email}
					type="text"
					placeholder="Email Address"
					className="p-4 my-4 w-full bg-gray-500"
				/>
				<input
					ref={password}
					type="password"
					placeholder="Password"
					className="p-4 my-4 w-full bg-gray-500"
				/>
				<p className="text-red-500 font-semibold">{errorMessage}</p>
				<button
					className="p-4 my-6 w-full bg-red-700 hover:bg-red-800 rounded-lg"
					onClick={handleButtonClick}
				>
					{isSignInForm ? "Sign In" : "Sign Up"}
				</button>
				<p
					className="py-4 cursor-pointer hover:underline"
					onClick={toggleSignInForm}
				>
					{isSignInForm
						? "New to MovieHub? Sign Up Now"
						: "Already a user? Sign In"}
				</p>
			</form>
		</div>
	);
};

export default Login;
