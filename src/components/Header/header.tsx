import "./style.css"

const Header = () => {
    return (
        <div className="header-container">
            <header className="container mx-auto">
                <div className="links-left">
                    <a href="">About Us</a>
                    <a href="">My Account</a>
                    <a href="">Wishlist</a>
                </div>
                <div className="links-right">
                    <a href="">Order Tracking</a>
                </div>
            </header>
        </div>
    );
}
export default Header;