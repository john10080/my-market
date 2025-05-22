'use client';
import React, { useState } from 'react'
import "./style.css";
import { Register } from './register';
export default function Registration() {

    const [user, setUser] = useState({
        uid: "",
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
        Register(user);
    }
    
    return (
        
        <div className="grid grid-cols-2">
            <div className="image-wrapper flex items-end bg-[url('/assets/reg-image.jpg')] bg-cover bg-center)">
            </div>
            <div className="form-wrapper p-10">
            <div className="icon-image">
                <h1 className="text-green-500 font-bold text-xl">Hello World</h1>
            </div>
            <div className="form-heading pt-8">
                <h1 className="text-lg font-bold">Lorem ipsum dolor sit amet consectetur adipisicing elit..</h1>
                <p className="text-gray-400 pt-2">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maiores officiis autem molestias quisquam, perspiciatis.</p>
            </div>
            <form className="pt-3 form-section" onSubmit={handleSubmit}>
                <div className="field-item mb-4">
                <label htmlFor="uid" className="block mb-1 font-medium">ID</label>
                <input
                    type="text"
                    id="uid"
                    name="uid"
                    className="w-full p-2 border rounded bg-gray-100"
                    value={user.uid}
                    readOnly
                />
                </div>
                <div className="field-item mb-4">
                <label>First Name</label>
                <input
                    type="text"
                    className="w-full p-4 border rounded"
                    name="first_name"
                    placeholder="First Name"
                    value={user.first_name}
                    onChange={e => setUser({ ...user, first_name: e.target.value })}
                />
                </div>
                <div className="field-item mb-4">
                <label>Last Name</label>
                <input
                    type="text"
                    placeholder="Full name"
                    className="w-full p-2 border rounded"
                    name="last_name"
                    value={user.last_name}
                    onChange={e => setUser({ ...user, last_name: e.target.value })}
                />
                </div>
                <div className="field-item mb-4">
                <label>Birthdate</label>
                <input
                    type="date"
                    className="w-full p-2 border rounded"
                    name="birth_date"
                    value={user.birth_date}
                    onChange={e => setUser({ ...user, birth_date: e.target.value })}
                />
                </div>
                <div className="field-item mb-4">
                <label>Email</label>
                <input
                    type="email"
                    className="w-full p-2 border rounded"
                    name="email"
                    placeholder="Email"
                    required
                    value={user.email}
                    onChange={e => setUser({ ...user, email: e.target.value })}
                />
                </div>
                <div className="field-item mb-4">
                <label>Contact Number</label>
                <input
                    type="tel"
                    className="w-full p-2 border rounded"
                    name="contact_number"
                    placeholder="Contact Number"
                    required
                    value={user.contact_number}
                    onChange={e => setUser({ ...user, contact_number: e.target.value })}
                />
                </div>
                <div>
                <label>Address</label>
                <input
                    type="text"
                    name="address"
                    placeholder="Address"
                    value={user.address}
                    onChange={e => setUser({ ...user, address: e.target.value })}
                />
                </div>
                <div className="field-item mb-4 flex items-center gap-2 terms_condition">
                <input
                    type="checkbox"
                    id="terms"
                    name="terms"
                    required
                />
                <label className="text-gray-700">
                    Yes, I understand and agree to the <span className="terms"><a href="#">Terms of Service</a></span> and <span className="terms"><a href="#">Privacy Policy</a></span>
                </label>
                </div>
                <input className="submit_button" type="submit" value="Submit" />
            </form>
            </div>
        </div>

    );

}