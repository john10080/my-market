'use client';

import Banner from "../Banner/banner";
import Category from "../Category/category";

const BannerWithCategory = () => {
    return (
        <div className="banner-with-category">
            <div className="grid grid-cols-12 gap-4">
                <div className="category-wrapper col-span-3"><Category/></div>
                <div className="banner-wrapper col-span-9"><Banner/></div>
            </div>
        </div>
    )
}
export default BannerWithCategory;