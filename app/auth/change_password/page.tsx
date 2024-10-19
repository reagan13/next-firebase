"use client";
import React, { useState } from "react";
import InputField from "@/components/auth/InputField";

const ChangePassword = () => {
	const [newPassword, setNewPassword] = useState<string>("");
	const [confirmPassword, setConfirmPassword] = useState<string>("");
	const [message, setMessage] = useState<string>("");

	const handleNewPasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setNewPassword(e.target.value);
	};

	const handleConfirmPasswordChange = (
		e: React.ChangeEvent<HTMLInputElement>
	) => {
		setConfirmPassword(e.target.value);
	};

	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {};

	return (
		<div className="max-w-md mx-auto p-4">
			<div className="text-center">
				<h2 className="text-2xl font-bold mb-4">
					<u>User Email</u>
				</h2>

				<h2 className="text-xl font-bold mb-4">Change Password</h2>
			</div>
			<form onSubmit={handleSubmit}>
				<div className="mb-4">
					<label
						htmlFor="newPassword"
						className="block text-sm font-medium text-gray-700"
					>
						New Password
					</label>
					<InputField type="password" onChange={handleNewPasswordChange} />
				</div>
				<div className="mb-4">
					<label
						htmlFor="confirmPassword"
						className="block text-sm font-medium text-gray-700"
					>
						Confirm Password
					</label>
					<InputField type="password" onChange={handleConfirmPasswordChange} />
				</div>
				<button
					type="submit"
					className="w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
				>
					Change Password
				</button>
			</form>
			{message && (
				<p className="mt-4 text-center text-sm text-gray-600">{message}</p>
			)}
		</div>
	);
};

export default ChangePassword;
