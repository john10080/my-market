'use client';
import React from "react";
import Image from "next/image";
import "./style.css"; // Import your CSS file
import { useMutation } from "@apollo/client";
import { useState } from "react";
import { LOGIN_USER } from "@/Graphql/usersQuery";
import useAuthStore from "@/store/authStore";
import { Toaster } from 'react-hot-toast';
import { ErrorToast, SuccessToast } from "@/components/Toast/basicToast";
import Loader from "@/components/loader";
import { useRouter } from 'next/navigation'

export default function Auth() {

    const router = useRouter()
    const [loginMutate] = useMutation(LOGIN_USER);
    const login = useAuthStore((state) => state.login);
    const logout = useAuthStore((state) => state.logout);
    const sessToken = useAuthStore( (state) => state.token)

    const [user, setUser] = useState({
        email: "",
        password: "",
        loggingIn: false,
    });

    // Logout user
    const handleLogout = async (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        alert("Logged out")
        logout();
    }

    const getSess = (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        SuccessToast(""+sessToken)
    }

    const handleLogin = async (e: { preventDefault: () => void; }) => {
        e.preventDefault();

        setUser({...user, loggingIn: true})

        try {
            const {data} = await loginMutate({
                variables: {
                    email: user.email,
                    password: user.password
                }
            })

            // Login data
            const { isAuthenticated, user: userData, accessToken, code } = data.loginUser;

            // login failed
            if(!isAuthenticated && code === 403) {
                ErrorToast("Invalid email or password");
                setUser({...user, loggingIn: false})
                return
            }

            login(isAuthenticated, userData, accessToken)
            SuccessToast("Authentication Success");
            router.push("/")


        } catch (err){
            ErrorToast("Login Failed");
            setUser({...user, loggingIn: false})
            return err
        }
    }

    return (
        <div className="grid grid-cols-2 login-container">
            <Toaster/>
            <div className="image-wrapper">
                <Image src="/assets/login.jpg" layout="responsive" width={0} height={0} alt="Woman sitting" />
            </div>
            <form className="flex flex-col gap-4">
                <button onClick={handleLogout}>LOGOUT</button>
                <button onClick={getSess}>GET SESSION</button>
                <h1 className="text-xl"><span><Image src="/assets/market.svg" layout="responsive" height={0} width={0} alt="market"/></span>Login to MyMarket</h1>
                <p className="text-gray-400">
                    Please enter your email and password to access your MyMarket account.
                </p>
                <input
                    type="email"
                    placeholder="Email"
                    className="p-2 border border-gray-300 rounded"
                    value={user.email}
                    onChange={(e) => setUser({...user, email: e.target.value})}
                />
                <input
                    type="password"
                    placeholder="Password"
                    className="p-2 border border-gray-300 rounded"
                    value={user.password}
                    onChange={(e) => setUser({...user, password: e.target.value})}
                />
                <button
                    type="submit"
                    onClick={handleLogin}
                    disabled={user.loggingIn}
                >
                    { user.loggingIn ? (
                        <span><Loader/></span>
                        ):
                        <span>Login</span>
                    }
                </button>
            </form>
        </div>
    );
}