import Image from "next/image";
import "./style.css";
const Category = () => {
    return(
        <div className="category-container">
            <ul>
                <li className="cat-item"><strong>All Categories</strong></li>
                <li className="cat-item expandable">
                    <div className="cat-title">
                        <span><Image src="/assets/fruits.svg" layout="responsive" alt="" width={0} height={0}  /></span>
                        <label>Fruits and Vegetables</label>
                    </div>
                    <ul className="expandable-item">
                        <li></li>
                    </ul>
                </li>
                <li className="cat-item">
                    <div className="cat-title">
                        <span><Image src="/assets/meat.svg" layout="responsive" alt="" width={0} height={0} /></span>
                        <label>Meats & Seafoods</label>
                    </div>
                </li>
                <li className="cat-item">
                    <div className="cat-title">
                        <span><Image src="/assets/dairy.svg" layout="responsive" alt="" width={0} height={0} /></span>
                        <label>Breakfast & Dairy</label>
                    </div>
                </li>
                <li className="cat-item">
                    <div className="cat-title">
                        <span><Image src="/assets/bread.svg" layout="responsive" alt="" width={0} height={0} /></span>
                        <label>Breads & Bakery</label>
                    </div>
                </li>
                <li className="cat-item">
                    <div className="cat-title">
                        <span><Image src="/assets/coffee.svg" layout="responsive" alt="" width={0} height={0} /></span>
                        <label>Beverages</label>
                    </div>
                </li>
                <li className="cat-item">
                    <div className="cat-title">
                        <span><Image src="/assets/frozen.svg" layout="responsive" alt="" width={0} height={0} /></span>
                        <label>Frozen Foods</label>
                    </div>
                </li>
                <li className="cat-item">
                    <div className="cat-title">
                        <span><Image src="/assets/fruits.svg" layout="responsive" alt="" width={0} height={0} /></span>
                        <label>Biscuits & Snacks</label>
                    </div>
                </li>
                <li className="cat-item">
                    <div className="cat-title">
                        <span><Image src="/assets/fruits.svg" layout="responsive" alt="" width={0} height={0} /></span>
                        <label>Grocery & Staples</label>
                    </div>
                </li>
                <li className="cat-item">
                    <div className="cat-title">
                        <span><Image src="/assets/fruits.svg" layout="responsive" alt="" width={0} height={0} /></span>
                        <label>Household Needs</label>
                    </div>
                </li>
                <li className="cat-item">
                    <div className="cat-title">
                        <span><Image src="/assets/fruits.svg" layout="responsive" alt="" width={0} height={0} /></span>
                        <label>Healthcare</label>
                    </div>
                </li>
                <li className="cat-item">
                    <div className="cat-title">
                        <span><Image src="/assets/fruits.svg" layout="responsive" alt="" width={0} height={0} /></span>
                        <label>Baby & Pregnancy</label>
                    </div>
                </li>
            </ul>
        </div>
    )
}
export default Category;