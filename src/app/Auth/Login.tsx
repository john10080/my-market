'use client';
import React from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import "./style.css"; // Import your CSS file

const Login = () => {

    const router = useRouter();


    // Login function
    const handleLogin = (e: { preventDefault: () => void; } ) => {
        e.preventDefault();
        alert("Login successful");
        router.push("/Landing");
    }

    return (
        <div className="grid grid-cols-2 login-container">
            <div className="image-wrapper">
                <Image src="/assets/woman-sitting.jpg" layout="responsive" width={0} height={0} alt="Woman sitting" />
            </div>
            <form className="flex flex-col gap-4">
                <h1><span><Image src="/assets/market.svg" layout="responsive" height={0} width={0} alt="market"/></span>Login to MyMarket</h1>
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