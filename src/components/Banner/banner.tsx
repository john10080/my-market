'use client';
import Image from "next/image";
import "keen-slider/keen-slider.min.css";
import "./style.css";
import NavigationMenu from "../Navigation/navigationMenu";
import { useKeenSlider } from "keen-slider/react";

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
  const [sliderRef] = useKeenSlider<HTMLDivElement>({
    loop: true,
    slides: { perView: 1 },
    mode: "snap",
    renderMode: "performance",
    drag: true,
    created(s) {
      // Optional: autoplay
      let timeout: NodeJS.Timeout;
      let mouseOver = false;
      function clearNextTimeout() {
        clearTimeout(timeout);
      }
      function nextTimeout() {
        clearTimeout(timeout);
        if (mouseOver) return;
        timeout = setTimeout(() => {
          s.next();
        }, 4000);
      }
      s.on("created", () => {
        s.container.addEventListener("mouseover", () => {
          mouseOver = true;
          clearNextTimeout();
        });
        s.container.addEventListener("mouseout", () => {
          mouseOver = false;
          nextTimeout();
        });
        nextTimeout();
      });
      s.on("dragStarted", clearNextTimeout);
      s.on("animationEnded", nextTimeout);
      s.on("updated", nextTimeout);
    },
  });

  return (
    <div className="banner-container">
      <NavigationMenu />
      <div ref={sliderRef} className="keen-slider owl-theme">
        {slides.map((slide, idx) => (
          <div className="keen-slider__slide banner-item" key={idx}>
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
      </div>
    </div>
  );
};

export default Banner;