import Image from "next/image";
import { ProductInterface } from "@/Interface/product";

const handleAddToCart = (id: number) => {
    console.log(id);
}

export default function Product({id, name, price, discountPrice, discountPercent, imageUrl}: ProductInterface) {
    return (
        <div className="product-inner" key={id}>
            <div className="image-wrapper">
                <Image
                    src={imageUrl}
                    layout="responsive"
                    width={0}
                    height={0}
                    alt={name}
                />
            </div>
            <div className="percentage">{discountPercent}% off</div>
            <div className="product-info">
                <h3>{name}</h3>
                <div className="product-prices">
                    {discountPrice ? (
                        <>
                            <span className="product-price--discount">${discountPrice}</span>
                            <span className="product-price--old">${price}</span>
                        </>
                    ) : (
                        <span className="product-price">${price}</span>
                    )}
                </div>
            </div>
            <button className="add-to-cart" onClick={() => handleAddToCart(id)}>Add to Cart</button>
        </div>
    );
}