'use client';
import Header from "@/components/Header/header";
import Navigation from "@/components/Navigation/navigation";
import BannerWithCategory from "@/components/Sections/bannerWithCategory";
import NewArrival from "@/components/Sections/newArival";
import Promo from "@/components/Sections/promo";


export default function Landing() { 
    return (
        <div className="flex flex-col min-h-screen">
            <Header />
            <Navigation />
            <main className="container mx-auto">
                <div className="section"><BannerWithCategory />  </div>
                <div className="section"><Promo /></div>
                <div className="section"><NewArrival /></div>
            </main>
        </div>
    );
}