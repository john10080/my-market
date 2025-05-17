const NavigationMenu = () => {
    return (
        <ul className="navigation-menu">
            <li className="menu-item expandable">
                <a href="#" className="lvl1">Home</a>
                <ul className="expandable-item">
                    <li></li>
                </ul>
            </li>
            <li className="menu-item expandable">
                <a href="#" className="lvl1">Shop</a>
                <ul className="expandable-item">
                    <li></li>
                </ul>
            </li>
            <li className="menu-item">
                <a href="#" className="lvl1">Fruits & Vegetables</a>
            </li>
            <li className="menu-item">
                <a href="#" className="lvl1">Beverages</a>
            </li>
            <li className="menu-item">
                <a href="#" className="lvl1">Blog</a>
            </li>
            <li className="menu-item">
                <a href="#" className="lvl1">Contact</a>
            </li>
        </ul>
    )
}
export default NavigationMenu;