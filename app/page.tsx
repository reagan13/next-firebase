"use client";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "@/app/firebase/config";
import { useRouter } from "next/navigation";
import { signOut } from "firebase/auth";
export default function Home() {
	const [user] = useAuthState(auth);
	const router = useRouter();
	const userSession = sessionStorage.getItem("user");

	console.log({ user });
	if (!user && !userSession) {
		router.push("/auth/login");
	}
	const handleLogout = () => {
		signOut(auth);
		sessionStorage.removeItem("user");
		router.push("/auth/login");
	};
	return (
		<div className="flex items-center justify-center h-screen flex-col">
			<h1 className="text-4xl font-bold">Welcome to Our Application!</h1>
			<button
				onClick={handleLogout}
				className="mt-4 py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
			>
				Logout
			</button>
		</div>
	);
}
