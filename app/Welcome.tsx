"use client";
import React from "react";

const Welcome = () => {
	return (
		<div className="flex items-center justify-center h-screen">
			<h1 className="text-4xl font-bold">Welcome to Our Application!</h1>
			<button
				onClick={handleLogout}
				className="mt-4 py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
			>
				Logout
			</button>
		</div>
	);
};

export default Welcome;
