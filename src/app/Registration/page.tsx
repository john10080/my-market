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
    return (
        <div className="grid grid-cols-2">
            <div className="image-wrapper">
                <Image src="/assets/reg-image.jpg" layout="responsive" width={0} height={0} alt="register-image"></Image>
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
                    <label>
                        Lorem ipsum dolor
                    </label>
                        <div className="border w-full kost-button">Kost
                            <Image className="down_arrow" src="/assets/down.png" width={14} height={0} alt="down_arrow"></Image>
                        </div>
                    <label>Full name</label>
                    <input type="text" placeholder="Full name"/>

                    <label>Gender</label>
                    <div className="gender-option">
                        <div><input type="radio" name="gender"/>
                        <label>Male</label></div>
                        <div><input type="radio" name="gender"/>
                        <label>Female</label></div>
                    </div>

                    <label>Birthdate</label>

                </form>
            </div>
        </div>

    );
}