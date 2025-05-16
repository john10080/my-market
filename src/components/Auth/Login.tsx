'use client';
import { useRouter } from "next/router";

const Login = () => {

    const router = useRouter();


    // Login function
    const handleLogin = (e) => {
        e.preventDefault();
        alert("Login successful");
        router.push("/Landing");
    }

    return (
        <div className="flex flex-col items-center justify-center min-h-screen p-4">
            <h1 className="text-2xl font-bold mb-4">Login</h1>
            <form className="flex flex-col gap-4">
            <input
                type="email"
                placeholder="Email"
                className="p-2 border border-gray-300 rounded"
            />
            <input
                type="password"
                placeholder="Password"
                className="p-2 border border-gray-300 rounded"
            />
            <button
                type="submit"
                className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600 transition duration-200"
                onClick={handleLogin}
            >
                Login
            </button>
            </form>
        </div>
    );
}

export default Login;