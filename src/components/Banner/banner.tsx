'use client';

import Image from "next/image";
import dynamic from "next/dynamic";
import $ from "jquery";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import "./style.css";
import NavigationMenu from "../Navigation/navigationMenu";

// Make jQuery available globally before OwlCarousel loads
if (typeof window !== "undefined") {
  // @ts-ignore
  window.$ = window.jQuery = $;
}

// Dynamically import OwlCarousel to avoid SSR issues
const OwlCarousel = dynamic(() => import("react-owl-carousel"), { ssr: false });

const slides = [
  {
    image: "/assets/strawberry.jpg",
    title: "Great Offers!",
    desc: "Get the best quality fruits at unbeatable prices.",
  },
  {
    image: "/assets/egg.jpg",
    title: "Fresh Arrivals!",
    desc: "Discover new products every week.",
  },
];

const Banner = () => {
  return (
    <div className="banner-container">
      <NavigationMenu />
      <OwlCarousel
        className="owl-theme"
        loop
        margin={10}
        nav
        items={1}
        dots
        autoplay
        smartSpeed={800}
        autoplayTimeout={4000}
      >
        {slides.map((slide, idx) => (
          <div className="banner-item" key={idx}>
            <div className="banner-image">
              <Image
                src={slide.image}
                alt={slide.title}
                layout="responsive"
                width={800}
                height={400}
              />
            </div>
            <div className="banner-content">
              <h2>{slide.title}</h2>
              <p>{slide.desc}</p>
              <button className="shop-now">Shop Now</button>
            </div>
          </div>
        ))}
      </OwlCarousel>
    </div>
  );
};

export default Banner;