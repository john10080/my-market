'use client';
import Header from "@/components/Header/header";
import Navigation from "@/components/Navigation/navigation";
import BannerWithCategory from "@/components/Sections/bannerWithCategory";


export default function Landing() { 
    return (
        <div className="flex flex-col min-h-screen">
            <Header />
            <Navigation />
            <main className="container mx-auto">
                <BannerWithCategory />  
            </main>
        </div>
    );
}