'use client';
import Header from "@/components/Header/header";
import Navigation from "@/components/Navigation/navigation";


export default function Landing() { 
    return (
        <div className="flex flex-col min-h-screen">
            <Header />
            <Navigation />
            
        </div>
    );
}