"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import InputField from "@/components/auth/InputField";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { auth } from "@/app/firebase/config";
import Link from "next/link";
const Login = () => {
	const router = useRouter();

	const [email, setEmail] = useState<string>("");
	const [password, setPassword] = useState<string>("");
	const [signInWithEmailAndPassword] = useSignInWithEmailAndPassword(auth);

	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		try {
			const res = await signInWithEmailAndPassword(email, password);
			if (res) {
				console.log("success", { res });
				sessionStorage.setItem("user", "true");
				setEmail("");
				setPassword("");
				alert("Login successful");
				router.push("/");
			} else {
				console.error("Login failed");
			}
		} catch (error) {
			console.error("Login failed", error);
		}
	};
	return (
		<div className="max-w-md mx-auto p-4">
			<h2 className="text-2xl font-bold mb-4">Login</h2>
			<form onSubmit={handleSubmit}>
				<div className="mb-4">
					<label
						htmlFor="email"
						className="block text-sm font-medium text-gray-700"
					>
						Email
					</label>
					<InputField type="email" onChange={(e) => setEmail(e.target.value)} />
				</div>
				<div className="mb-4">
					<label
						htmlFor="password"
						className="block text-sm font-medium text-gray-700"
					>
						Password
					</label>
					<InputField
						type="password"
						onChange={(e) => setPassword(e.target.value)}
					/>
				</div>
				<button
					type="submit"
					className="w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
				>
					Login
				</button>
			</form>
			<div className="mt-4 text-center">
				<button className="text-sm text-indigo-600 hover:text-indigo-500">
					Forgot Password?
				</button>
			</div>
			<div className="mt-4 text-center">
				<Link
					href="/auth/signup"
					className="text-sm text-indigo-600 hover:text-indigo-500"
				>
					Don&apos;t have an account? Sign Up
				</Link>
			</div>
		</div>
	);
};

export default Login;
