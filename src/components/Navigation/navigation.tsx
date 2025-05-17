import Image from "next/image";
import "./style.css";
const Navigation = () => {
    return(
        <div className="navigation-container container mx-auto">
            <div className="nav-wrap grid grid-cols-12 justify-content-space-between">
                <div className="store-logo-wrap col-span-3"><Image src="/assets/market.svg" layout="responsive" width={0} height={0} alt="Woman sitting" />MyMarket</div>
                <div className="search-wrapper col-span-8"><input type="text" placeholder="Search for products, categories, or brands..." />
                    <Image src="/assets/search.svg" layout="responsive" width={0} height={0} alt="search"/>
                </div>
                <div className="account-menu col-span-1 grid grid-cols-3 col-start-12">
                    <div className="account-menu-item">
                        <Image src="/assets/user.svg" layout="responsive" width={0} height={0} alt="user"/>
                    </div>
                    <div className="account-menu-item">
                        <Image src="/assets/cart.svg" layout="responsive" width={0} height={0} alt="cart"/>
                    </div>
                    <div className="account-menu-item">
                        <Image src="/assets/heart.svg" layout="responsive" width={0} height={0} alt="heart"/>
                    </div>
                </div>
            </div>
        </div>
    );  
}

export default Navigation;