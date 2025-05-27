'use client';
import React, { useState } from 'react'
import Image from 'next/image';
import "./style.css";
// import { Register } from './register';
import axios from "axios";

export default function Registration() {

    const [user, setUser] = useState({
        email: "",
        password: "",
        first_name: "",
        last_name: "",
        birth_date: "",
        contact_number: "",
        address: "",
    });
    
    const handleSubmit = async (e: React.FormEvent) => {    
        e.preventDefault();
        console.log(user);
        try {
            const response = await axios.post('http://localhost/my-market/api/register.php', user);
            console.log(response);
            alert("User data added successfully");
        } catch (error) {
            console.error('Registration failed:', error);
        }
    }
    
    return (
        
        <div className="grid grid-cols-2 form-container">
            <div className="image-wrapper flex items-end bg-[url('/assets/reg-image.jpg')] bg-cover bg-center">
            </div>
            <div className="form-wrapper">
            <div className="icon-image">
                <h1 className="font-bold text-xl mb-4"> 
                    <Image src="/assets/market.svg" layout="responsive" width={0} height={0} alt='market-icon' /> 
                    Signup to My Market</h1>
            </div>
            <div className="form-heading mb-4">
                {/* <h1 className="text-lg font-bold">Signup Now</h1> */}
                <p className="text-gray-400">
                    Please fill in the form below to create your My Market account. All fields are required.
                </p>
            </div>
            <form className="form-section" onSubmit={handleSubmit}>
                <div className="grid grid-cols-2 gap-4">
                    <div className="field-item mb-4">
                        <label>First Name</label>
                        <span>
                            <input
                                type="text"
                                className="w-full p-4 border rounded"
                                name="first_name"
                                placeholder="First Name"
                                value={user.first_name}
                                onChange={e => setUser({ ...user, first_name: e.target.value })}
                            />
                        </span>
                    </div>
                    <div className="field-item mb-4">
                        <label>Last Name</label>
                        <span>
                            <input
                                type="text"
                                placeholder="Full name"
                                className="w-full p-2 border rounded"
                                name="last_name"
                                value={user.last_name}
                                onChange={e => setUser({ ...user, last_name: e.target.value })}
                            />
                        </span>
                    </div>                    
                </div>
                <div className="field-item mb-4">
                <label>Birthdate</label>
                <span>
                    <input
                        type="date"
                        className="w-full p-2 border rounded"
                        name="birth_date"
                        value={user.birth_date}
                        onChange={e => setUser({ ...user, birth_date: e.target.value })}
                    />
                </span>
                </div>
                <div className="grid grid-cols-2 gap-4">
                    <div className="field-item mb-4">
                        <label>Email</label>
                        <span>
                            <input
                                type="email"
                                className="w-full p-2 border rounded"
                                name="email"
                                placeholder="Email"
                                required
                                value={user.email}
                                onChange={e => setUser({ ...user, email: e.target.value })}
                            />
                        </span>
                    </div>
                    <div className="field-item mb-4">
                        <label>Password</label>
                        <span>
                            <input
                                type="password"
                                className="w-full p-2 border rounded"
                                name="password"
                                placeholder="Password"
                                required
                                value={user.password}
                                onChange={e => setUser({ ...user, password: e.target.value })}
                            />
                        </span>
                    </div>
                </div>
                <div className="field-item mb-4">
                    <label>Contact Number</label>
                    <span>
                        <input
                            type="tel"
                            className="w-full p-2 border rounded"
                            name="contact_number"
                            placeholder="Contact Number"
                            required
                            value={user.contact_number}
                            onChange={e => setUser({ ...user, contact_number: e.target.value })}
                        />
                    </span>
                </div>
                <div>
                <label>Address</label>
                <span>
                    <input
                        type="text"
                        name="address"
                        placeholder="Address"
                        value={user.address}
                        onChange={e => setUser({ ...user, address: e.target.value })}
                    />
                </span>
                </div>
                <div className="field-item mb-4 flex items-center gap-2 terms_condition">
                <span>
                    <input
                        type="checkbox"
                        id="terms"
                        name="terms"
                        required
                    />
                </span>
                <label className="text-gray-700 terms">
                    Yes, I understand and agree to the <span className="terms"><a href="#">Terms of Service</a></span> and <span className="terms"><a href="#">Privacy Policy</a></span>
                </label>
                </div>
                <span>
                    <input className="submit_button" type="submit" value="Submit" />
                </span>
            </form>
            </div>
        </div>

    );

}