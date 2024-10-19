"use client";
import React, { useState } from "react";
import InputField from "@/components/auth/InputField";

const ForgotPassword = () => {
	const [email, setEmail] = useState<string>("");
	const [message, setMessage] = useState<string>("");

	const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setEmail(e.target.value);
	};

	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
	};

	return (
		<div className="max-w-md mx-auto p-4">
			<h2 className="text-2xl font-bold mb-4">Forgot Password</h2>
			<form onSubmit={handleSubmit}>
				<div className="mb-4">
					<label
						htmlFor="email"
						className="block text-sm font-medium text-gray-700"
					>
						Email
					</label>
					<InputField type="email" onChange={handleEmailChange} />
				</div>
				<button
					type="submit"
					className="w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
				>
					Send Reset Link
				</button>
			</form>
			{message && (
				<p className="mt-4 text-center text-sm text-gray-600">{message}</p>
			)}
		</div>
	);
};

export default ForgotPassword;
