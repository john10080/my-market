import Image from "next/image";

const Category = () => {
    <div className="category-container">
        <ul>
            <li className="expandable">
                <div className="cat-title">
                    <span><Image src="/assets/all.svg" layout="responsive" alt="" width={0} height={0}  /></span>
                    <label>Fruits and Vegetables</label>
                </div>
                <ul className="expandable-item">
                    <li></li>
                </ul>
            </li>
        </ul>
    </div>
}
export default Category;