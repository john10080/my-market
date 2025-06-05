"use client"
import React from 'react';
import Navigation from '@/components/Navigation/navigation';
import NavigationMenu from '@/components/Navigation/navigationMenu';
import Header from '@/components/Header/header';
import './style.css';

import { useRef, useState, useEffect, useMemo } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import type { Swiper as SwiperClass } from 'swiper';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';


// import required modules
import { FreeMode, Navigation as SwiperNavigation, Thumbs } from 'swiper/modules';


export default function ProductRegistration() {

    // useState for counter button on add remove button
    const [count, setCount] = useState<number>(0);

    const [thumbsSwiper, setThumbsSwiper] = useState<SwiperClass | null>(null);


    // useState for active links path
        const [activeLink, setActiveLink] = useState('');
        const handleClick = (link: string) => {
            setActiveLink(link);
        };

    // useState for star rating
    const [rating, setRating] = useState(0);

    const handleRating = (index : number) => {
        if(rating === index + 1) {
            setRating(0);
        } else {
            setRating(index + 1);
        }

    }

    // Code for Promo Timer
    interface TimeLeft {
        days: number,
        hours: number,
        minutes: number,
        seconds: number;
    }

    const calculateTimeLeft = (endTime: string): TimeLeft => {
        const difference = +new Date(endTime) - +new Date();

        if(difference <= 0) {
            return { days: 0, hours: 0, minutes: 0, seconds: 0};
        }

        return {
            days: Math.floor(difference / (1000 * 60 * 60 *24)),
            hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
            minutes: Math.floor((difference / (1000 * 60)) % 60),
            seconds: Math.floor((difference / 1000) % 60),
        }
    }

    const promoEndTime = useMemo(() => {
        const date = new Date();
        date.setDate(date.getDate() + 5);
        return date.toISOString();
    }, []);

    const [timeLeft, setTimeLeft] = useState<TimeLeft>(calculateTimeLeft(promoEndTime));

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft(calculateTimeLeft(promoEndTime));
        }, 1000);

        return () => clearInterval(timer);
    }, [promoEndTime])

    const pad = (value: number) : string => value.toString().padStart(2,'0');

    /* End of code for Timer*/

    return (
        <>
            <Header />

            <div className="container mx-auto">
                <Navigation />
                <NavigationMenu />
                {/* Grid Section */}
                <div className="grid grid-area grid-cols-1 md:grid-cols-2">
                    <div className='product-image'>
                        <div className='product-path mb-2 flex gap-1'>
                            <a href="#" className={activeLink === 'Home' ? 'path-link active' : 'path-link'} onClick={()=>handleClick('Home')}>Home&gt; </a>
                            <a href="#" className={activeLink === 'fruits_vegetables' ? 'path-link active' : 'path-link'} onClick={()=>handleClick('fruits_vegetables')}>Fruits & Vegetables&gt; </a>
                            <a href="#" className={activeLink === 'exotic' ? 'path-link active' : 'path-link'} onClick={() => handleClick('exotic')}>Exotic Fruits & Veggies&gt; </a>
                            <a href="#" className={activeLink === 'marketSide_banana' ? 'path-link active' : 'path-link'} onClick={()=>handleClick('marketSide_banana')}>Marketside Fresh Organic Bananas, Bunch</a>

                        </div>
                        {/* Swiper section */}
                        <Swiper
                            style={{
                                '--swiper-navigation-color': '#fff',
                                '--swiper-pagination-color': '#fff',
                            } as any}
                            loop={true}
                            spaceBetween={10}
                            navigation={true}
                            thumbs={{ swiper: thumbsSwiper }}
                            modules={[FreeMode, SwiperNavigation, Thumbs]}
                            className="mySwiper2"
                        >
                            <SwiperSlide>
                                <img src="/assets/product-details/banana1.png" alt="" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="/assets/product-details/banana2.jpg" alt="" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="/assets/product-details/banana3.jpg" alt="" />
                            </SwiperSlide>

                        </Swiper>

                        <div className='product-thumbnail h-20'>
                            <Swiper
                                onSwiper={setThumbsSwiper}
                                loop={true}
                                spaceBetween={10}
                                slidesPerView={3}
                                freeMode={true}
                                watchSlidesProgress={true}
                                modules={[FreeMode, SwiperNavigation, Thumbs]}
                                className="thumbSwiper justify-center"
                            >
                                <SwiperSlide style={{maxWidth: '60px', height: '70px' }}>
                                    <img src="/assets/product-details/banana1.png" alt="" style={{ width: '100%' }} />
                                </SwiperSlide>
                                <SwiperSlide style={{maxWidth: '60px', height: '70px' }}>
                                    <img src="/assets/product-details/banana2.jpg" alt="" style={{ width: '100%' }} />
                                </SwiperSlide>
                                <SwiperSlide style={{ maxWidth: '60px', height: '70px' }}>
                                    <img src="/assets/product-details/banana3.jpg" alt="" style={{ width: '100%' }} />
                                </SwiperSlide>
                            </Swiper>
                        </div>

                    </div>


                    <div className='product-description'>
                        <div>
                            <h2 className='text-2xl font-bold mb-1'>Marketside Fresh Organic Bananas, Bunch </h2>
                        </div>
                        <div className='rating-container mb-2'>
                                
                                {/* Wrap every star images/icons to a div and a parent div to make it smaller and in line with the rating number */}
                                <div>
                                    <div className='flex'>
                                    {[...Array(5)].map((_, index) => (
                                    <img
                                        key={index}
                                        src={index < rating ? './assets/product-details/star.svg' : './assets/product-details/no-star.svg'}
                                        alt="star"
                                        onClick={() => handleRating(index)}
                                        style={{cursor: 'pointer', pointerEvents: 'auto', zIndex: 1}}

                                    />
                                ))}
                                </div>
                                </div>
                            <div className='rating-number'>
                                <p className='font-bold'>{rating}.00</p>
                            </div>
                            <p>SKU: <span className='font-bold'>E7F8</span></p>
                        </div>
                        <div className='mb-2 product-description-top-container'>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia temporibus, eveniet quibusdam assumenda, </p>
                        </div>
                        <div className='price'>
                            <p className='text-red-700 font-bold text-lg'>$0.89</p>
                            <p className='old-price'>$1.99</p>
                        </div>
                        <button className='whats-app-button text-xs font-bold'>Order on WhatsApp</button>
                        <div className="special-offer">
                            <p className='offer'>Special Offer:</p>

                            <div className='days time'>{pad(timeLeft.days)}</div>
                            <div className='hours time'>{pad(timeLeft.hours)}</div>
                            <div className='minutes time'>{pad(timeLeft.minutes)}</div>
                            <p>:</p>
                            <div className='seconds time'>{pad(timeLeft.seconds)}</div>
                            <p className='text-xs description'>Remains until the end of the offer</p>
                        </div>



                        <div className="purchase-buttons flex gap-2 mb-4">
                            <div className='add-remove-button-container'>
                                <button className='minus-icon' style={{opacity: count === 0 ? 0.5 : 1, cursor: count === 0 ? 'not-allowed':'pointer'}} onClick={() => {
                                    setCount(count - 1);
                                }} disabled={count === 0}>
                                    <img src="./assets/product-details/minus-icon.svg" alt="" />
                                </button>
                                <span className='px-4 product-count'>{count}</span>
                                <button className='plus-icon' onClick={() => {
                                    setCount(count + 1);
                                }}>
                                    <img src="./assets/product-details/plus-icon.svg" alt="" />
                                </button>
                            </div>

                            <div className='add-to-cart-button-container'>
                                <button className='flex gap-2'>
                                    <img src="./assets/product-details/add-to-cart-icon.svg" alt="" />Add to Cart</button>
                            </div>

                            <div className="buy-now-container">
                                <button className='flex gap-2'>
                                    <img src="./assets/product-details/add-to-cart-icon.svg" alt="" />
                                    Buy now</button>
                            </div>
                            
                        </div>

                        <div className='payment-warranty-container text-xs'>
                            <img src="./assets/product-details/credit-card.svg" alt="" />
                            <p><span className='font-bold'>Payment.</span> Payment upon receipt of goods, Payment by card in the department, Google Play, Online card, -5% discount in case of payment</p>
                        </div>
                        <div className='payment-warranty-container text-xs mb-5'>
                            <img src="./assets/product-details/warranty.svg" alt="" />
                            <p><span className='font-bold'>Warranty.</span> The Consumer Protection Act does not provide for the return of this product of proper quality.</p>
                        </div>

                        <div className='options-container'>
                            <div>
                                <div className='image-container'><img src="./assets/product-details/like-product.svg" alt="" /></div>
                                <p>Add to Wishlist</p>
                            </div>
                            <div>
                                <div className='image-container'><img src="./assets/product-details/share-product.svg" alt="" /></div>
                                <p>Share this product</p>
                            </div>
                            <div>
                                <div className='image-container'><img src="./assets/product-details/compare-product.svg" style={{maxWidth:'18px'}} alt="" /></div>
                                <p>Compare</p>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>
        </>
    );
}

