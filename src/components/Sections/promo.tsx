import Image from "next/image";
import ShopNowBtn from "../Buttons/shopNowBtn";
import "./style.css"; // Import your CSS file

const sayHello = (who: string) => {
    alert("Hello, "+ who );
}

const Promo = () => {
    return(
        <div className="promo-wrapper grid grid-cols-3 gap-4">
            <div className="promo-item">
                <Image
                    src="/assets/egg-small.jpg"
                    alt="Promo 1"
                    width={500}
                    height={500}
                    className="promo-image"
                />
                <div className="promo-detail">
                    <label htmlFor="">Only this week</label>
                    <h2 className="promo-title">Quality eggs at an affordable price</h2>
                    <p className="promo-description">Eat one everyday</p>   
                    <ShopNowBtn 
                        label="Shop Now"
                        disabled={false}
                        onClick={() => sayHello("World")}
                    />
                </div>
            </div>
            <div className="promo-item">
                <Image
                    src="/assets/lemon.jpg"
                    alt="Promo 2"
                    width={500}
                    height={500}
                    className="promo-image"
                />
                <div className="promo-detail">
                    <label htmlFor="">Limited Time Offer</label>
                    <h2 className="promo-title">Juicy lemons for your kitchen</h2>
                    <p className="promo-description">Perfect for drinks and desserts</p>   
                    <ShopNowBtn 
                        label="Shop Now"
                        disabled={false}
                        onClick={() => sayHello("Lemon Lover")}
                    />
                </div>
            </div>
            <div className="promo-item">
                <Image
                    src="/assets/snacks.jpg"
                    alt="Promo 3"
                    width={500}
                    height={500}
                    className="promo-image"
                />
                <div className="promo-detail">
                    <label htmlFor="">Hot Pick</label>
                    <h2 className="promo-title">Tasty snacks for every mood</h2>
                    <p className="promo-description">Snack smart, snack happy</p>   
                    <ShopNowBtn 
                        label="Shop Now"
                        disabled={false}
                        onClick={() => sayHello("Snack Fan")}
                    />
                </div>
            </div>
        </div>
    );
}
export default Promo;