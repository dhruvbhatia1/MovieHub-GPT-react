import React, { useState } from "react";
import Header from "./Header";

const Login = () => {
	const [isSignInForm, setIsSignInForm] = useState(true);

	const toggleSignInForm = () => {
		setIsSignInForm(!isSignInForm);
	};
	return (
		<div>
			<Header />
			<div className="absolute">
				<img
					src="https://assets.nflxext.com/ffe/siteui/vlv3/42df4e1f-bef6-499e-87ff-c990584de314/5e7c383c-1f88-4983-b4da-06e14c0984ba/IN-en-20230904-popsignuptwoweeks-perspective_alpha_website_large.jpg"
					alt="background-image"
				/>
			</div>
			<form className="w-4/12 absolute p-12 bg-black my-32 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80">
				<h1 className="font-bold text-3xl py-4">
					{isSignInForm ? "Sign In" : "Sign Up"}
				</h1>
				{!isSignInForm && (
					<input
						type="text"
						placeholder="Full Name"
						className="p-4 my-4 w-full bg-gray-500"
					/>
				)}
				<input
					type="text"
					placeholder="Email Address"
					className="p-4 my-4 w-full bg-gray-500"
				/>
				<input
					type="text"
					placeholder="Password"
					className="p-4 my-4 w-full bg-gray-500"
				/>
				<button className="p-4 my-6 w-full bg-red-700 hover:bg-red-800 rounded-lg">
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
