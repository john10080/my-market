import Image from "next/image";
import "./style.css";
const Banner = () => {
    return (
        <div className="banner-container">
            <div className="banner-item">
                <div className="banner-image">
                    <Image src="/assets/egg.jpg" alt="Banner" 
                    layout="responsive"
                    width={0}   
                    height={0}                   
                    />
                </div>
                <div className="banner-content">
                    <h2>Great Offers!</h2>
                    <p>Get the best quality fruits at unbeatable prices.</p>
                    <button className="shop-now">Shop Now</button>
                </div>
            </div>
        </div>
    )
}

export default Banner;