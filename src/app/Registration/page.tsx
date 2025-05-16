'use client';
export default function Landing() { 
    return (
        <div className="flex flex-col items-center justify-center min-h-screen p-4">
            <h1 className="text-2xl font-bold mb-4">Welcome to the Landing Page</h1>
            <p className="mb-4">Registration</p>
            <button
                className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600 transition duration-200"
                onClick={() => alert("Button clicked!")}
            >
                Click Me
            </button>
        </div>
    );
}