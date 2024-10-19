"use client";
import React from "react";
import InputField from "@/components/auth/InputField";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import { auth } from "@/app/firebase/config";
import Link from "next/link";
const SignUp = () => {
	const router = useRouter();

	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const [createUserWithEmailAndPassword] =
		useCreateUserWithEmailAndPassword(auth);

	const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setEmail(e.target.value);
	};
	const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setPassword(e.target.value);
	};
	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		try {
			e.preventDefault();
			const res = await createUserWithEmailAndPassword(email, password);
			if (res) {
				console.log("success");
				console.log({ res });
				setEmail("");
				setPassword("");
				alert("Signup successful");
				router.push("/auth/login");
			} else {
				console.error("Signup failed");
				alert("Signup failed");
			}
		} catch (e) {
			console.error(e);
		}
	};
	return (
		<div className="max-w-md mx-auto p-4">
			<h2 className="text-2xl font-bold mb-4">Sign Up</h2>
			<form onSubmit={handleSubmit}>
				<div className="mb-4">
					<label
						htmlFor="email"
						className="block text-sm font-medium text-gray-700"
					>
						Email
					</label>
					<InputField type="text" onChange={handleEmailChange} />
				</div>
				<div className="mb-4">
					<label
						htmlFor="password"
						className="block text-sm font-medium text-gray-700"
					>
						Password
					</label>
					<InputField type="password" onChange={handlePasswordChange} />
				</div>
				<button
					type="submit"
					className="w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
				>
					Sign Up
				</button>
			</form>
			<div className="mt-4 text-center">
				<Link
					href="/auth/login"
					className="text-sm text-indigo-600 hover:text-indigo-500"
				>
					Already have an account? Login
				</Link>
			</div>
		</div>
	);
};

export default SignUp;
