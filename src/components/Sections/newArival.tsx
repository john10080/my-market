const products = [
    {
        id: 1,
        name: "Wireless Headphones",
        price: 99.99,
        discountPrice: 79.99,
        discountPercent: 20,
        imageUrl: "/assets/product/headphones.png",
    },
    {
        id: 2,
        name: "Smart Watch",
        price: 149.99,
        discountPrice: 119.99,
        discountPercent: 20,
        imageUrl: "/assets/product/smart-watch.jpg",
    },
    {
        id: 3,
        name: "Bluetooth Speaker",
        price: 59.99,
        discountPrice: 44.99,
        discountPercent: 25,
        imageUrl: "/assets/product/speaker.jpg",
    },
    {
        id: 4,
        name: "Fitness Tracker",
        price: 79.99,
        discountPrice: 59.99,
        discountPercent: 25,
        imageUrl: "/assets/product/fitness.jpg",
    },
    {
        id: 5,
        name: "Portable Charger",
        price: 39.99,
        discountPrice: 29.99,
        discountPercent: 25,
        imageUrl: "/assets/product/charger.jpg",
    },
    {
        id: 6,
        name: "Noise Cancelling Earbuds",
        price: 129.99,
        discountPrice: 99.99,
        discountPercent: 23,
        imageUrl: "/assets/product/earbuds.jpg",
    },
]

import Product from "./product";
export default function NewArrival() {
    return (
        <div className="new-arrival-section section">
            <div className="section-header">
                <h1>New Arrivals</h1>
                <p>Discover the latest products in our store.</p>
            </div>
            <div className="product-grid grid md:grid-cols-6 sm:grid-cols-2 ">
                { products.map((p) => (
                    <div className="product-item" key={p.id}>
                        <Product 
                            id={p.id}
                            name={p.name} 
                            price={p.price}
                            discountPrice={p.discountPrice}
                            discountPercent={p.discountPercent}
                            imageUrl={p.imageUrl}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
}