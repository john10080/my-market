'use client';
import Image from "next/image";
import "./style.css";
// export default function Landing() { 
//     return (
//         <div className="flex flex-col items-center justify-center min-h-screen p-4">
//             <h1 className="text-2xl font-bold mb-4">Welcome to the Landing Page</h1>
//             <p className="mb-4">Registration</p>
//             <p>Hello World</p>
//             <button
//                 className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600 transition duration-200"
//                 onClick={() => alert("Button clicked!")}
//             >
//                 Click Me
//             </button>
//         </div>
//     );
// }


export default function Registration() {

    const getCurrentTimestampID = () => {
        const now = new Date();

        const year = now.getFullYear();
        const month = String(now.getMonth() + 1).padStart(2, '0'); // Month is 0-indexed
        const day = String(now.getDate()).padStart(2, '0');
        const hours = String(now.getHours()).padStart(2, '0');
        const minutes = String(now.getMinutes()).padStart(2, '0');
        const seconds = String(now.getSeconds()).padStart(2, '0');
        const milliseconds = String(now.getMilliseconds()).padStart(3, '0');
        return `${year}${month}${day}${hours}${minutes}${seconds}${milliseconds}`;
    };
    
    return (
        
        <div className="grid grid-cols-2">
            <div className="image-wrapper flex items-end bg-[url('/assets/reg-image.jpg')] bg-cover bg-center)">
                {/* <Image className="reg-image bg-cover"src="/assets/reg-image.jpg" layout="responsive" width={0} height={0} alt="register-image"></Image>
                 */}
            </div>
            <div className="form-wrapper p-10">
                <div className="icon-image">
                    <h1 className="text-green-500 font-bold text-xl">Hello World</h1>
                </div>
                <div className="form-heading pt-8">
                    <h1 className="text-lg font-bold">Lorem ipsum dolor sit amet consectetur adipisicing elit..</h1>
                    <p className="text-gray-400 pt-2">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maiores officiis autem molestias quisquam, perspiciatis.</p>
                </div>
                <form className="pt-3 form-section">
                    <div className="field-item mb-4">
                        <label htmlFor="uid" className="block mb-1 font-medium">ID</label>
                        <input
                            type="text"
                            id="uid"
                            name="uid"
                            className="w-full p-2 border rounded bg-gray-100"
                            value={getCurrentTimestampID()}
                            readOnly
                        />
                    </div>

                    <div className="field-item mb-4">
                        <label>First Name</label>
                        <input type="text" className="w-full p-4 border rounded"name="first_name" placeholder="First Name"/>
                    </div>
                    <div className="field-item mb-4">
                        <label>Last Name</label>
                        <input
                            type="text"
                            placeholder="Full name"
                            className="w-full p-2 border rounded"
                            name="last_name"
                        />
                    </div>
                    {/* <div className="field-item mb-4">
                        <label>Gender</label>
                        <div className="flex gap-4 mt-2">
                            <label className="flex items-center gap-1">
                                <input type="radio" name="gender" value="male" />
                                Male
                            </label>
                            <label className="flex items-center gap-1">
                                <input type="radio" name="gender" value="female" />
                                Female
                            </label>
                        </div>
                    </div> */}
                    <div className="field-item mb-4">
                        <label>Birthdate</label>
                        <input
                            type="date"
                            className="w-full p-2 border rounded"
                            name="birthdate"
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
                        />
                    </div>

                    <div className="field-item mb-4">
                        <label>Contact Number</label>
                        <input
                            type="tel"
                            className="w-full p-2 border rounded"
                            name="contact_number"
                            placeholder="Contact Number"
                            pattern="[0-9]{10,15}"
                            required
                        />
                    </div>

                    <div>
                        <label>Address</label>
                        <input type="text" name="address" placeholder="Address" />
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