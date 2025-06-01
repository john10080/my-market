import React from 'react'
import "./footer.css"
import Image from 'next/image'

const footer = () => {
    return (
        <div className='container mx-auto footer-section'>
            <div className='newsletter-container flex justify-between'>
                <div className="newsletter w-80">
                    <h4 className='text-lg font-bold'>Join our newsletter for £10 offs</h4>
                    <p className='text-xs'>Register now to get latest updates on promotions & coupons. Don’t worry, we do not spam!</p>
                </div>

                <div className='ml-auto w-80 newsletter-form'>
                    <div className="newsletter-input-container">
                        <div className="email-icon p-3">
                            <Image src="/assets/email-icon.svg" alt="Email Icon" width={26} height={26} />
                        </div>
                        <input type="email" placeholder="Enter your email address" />
                        <button>Send</button>
                    </div>
                    <p className='text-xs mt-2'>By subscribing you agree to our <a href="#">Terms & Conditions</a> and <a
                        href="#">Privacy & Cookies Policy</a>.</p>
                </div>
            </div>

            <div className='grid-section grid grid-cols-1 md:grid-cols-6 my-10'>
                <div className='help-section col-span-2 grid-div'>
                    <h4>Do You Need Help ?</h4>
                    <div className='w-70 mt-2'>
                        <p>Autoseligen syr. Nek diarask fröbomba. Nör antipol kynoda nynat. Pressa fåmoska.</p>
                    </div>
                    <div className='items-container flex space-x-5 mt-5'>
                        <span>
                            <img src="/assets/footer-icons/phone.svg" alt="Phone Icon" />
                        </span>
                        <div>
                            <p className='item-detail'>Monday-Friday: 08am-9pm</p>
                            <p className='font-semibold text-lg detail'>0 800 300-353</p>
                        </div>
                    </div>
                    <div className='items-container flex space-x-5 mt-5'>
                        <span>
                            <img src="/assets/footer-icons/mail.svg" alt="Email Icon" />
                        </span>
                        <div>
                            <p className='item-detail'>Need help with your order?</p>
                            <p className='font-semibold text-xs detail'><a href="#">info@example.com</a></p>
                        </div>
                    </div>

                </div>
                <div className='grid-div'>
                    <h4>Make money with Us</h4>
                    <div className='mt-2'>
                        <p>Sell on Grogin</p>
                    <p>Sell your Services on Grogin</p>
                    <p>Sell on Grogin Business</p>
                    <p>Sell Your Apps on Grogin</p>
                    <p>Become an Affilate</p>
                    <p>Advertise Your Products</p>
                    <p>Self-Publish with Us</p>
                    <p>Become an Blowwe Vendor</p>
                    </div>
                </div>
                <div className='grid-div pl-2'>
                    <h4>Let Us Help You</h4>
                        <div className='mt-2'>
                            <p>Accessibility Statement</p>
                        <p>Your Orders</p>
                        <p>Returns & Replacements</p>
                        <p>Shipping Rates & Policies</p>
                        <p>Refund and Returns Policy</p>
                        <p>Privacy Policy</p>
                        <p>Terms and Conditions</p>
                        <p>Cookie Settings</p>
                        <p>Help Center</p>
                        </div>
                </div>
                <div className='grid-div'>
                    <h4>Get to Know Us</h4>
                        <div className='mt-2'>
                            <p>Careers for Grogin</p>
                        <p>About Grogin</p>
                        <p>Investor Relations</p>
                        <p>Grogin Devices</p>
                        <p>Customer reviews</p>
                        <p>Social Responsibility</p>
                        <p>Store Locations</p>
                        </div>
                </div>
                <div className='grid-div download-app'>
                    <h4>Download our app</h4>
                    <div className='flex mt-2'>
                    <span><img src="assets/footer-icons/google.svg" alt="" /></span>
                    <p className='app-discount'>Download App Get -10%</p>
                    </div>
                    <div className='flex'>
                        <span><img src="assets/footer-icons/app_store.svg" alt="" /></span>
                        <p className='app-discount'>Download App Get -20%</p>
                    </div>

                    <div className='social-media mt-10'>
                        <p>Follow us on social media:</p>
                        <div className='flex social-media-icons'>
                            <span><img src="assets/footer-icons/facebook.svg" style={{ width: 24 }}alt="" /></span>
                        <span><img src="assets/footer-icons/xTwitter.svg" style={{ width: 24 }} alt="" /></span>
                        <span><img src="assets/footer-icons/instagram.svg" style={{ width: 24 }} alt="" /></span>
                        <span><img src="assets/footer-icons/linkedIn.svg"  style={{ width: 24 }} alt="" /></span>
                        </div>
                    </div>
                </div>
            </div>

            <div className="copyright-section flex text-xs justify-between">
                <div><p>Copyright 2024 &copy; Jinstore WooCommerce WordPress Theme. All right reserved. Powered by <span className='font-bold'>BlackRise Themes.</span></p></div>
                <div className='copyright-links'>
                    <a href="#">Terms and Conditions</a>
                    <a href="#">Privacy and Policy</a>
                    <a href="#">Order Tracking</a>
                </div>
            </div>

            <div className='payment-section flex'>
                <img src="assets/footer-icons/visa.svg" alt="" />
                <img src="assets/footer-icons/masterCard.svg" alt="" />
                <img src="assets/footer-icons/paypal.svg" alt="" />
                <img src="assets/footer-icons/skrill.svg" alt="" />
                <img src="assets/footer-icons/klarna.svg" alt="" />
            </div>
        </div>
    )
}

export default footer