import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from '../redux/cartSlice';
import toast from 'react-hot-toast';
import '../styles/productdetail.css';

const ProductDetail = () => {
    const { id } = useParams();
    const dispatch = useDispatch();
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);
    const [selectedSize, setSelectedSize] = useState("M");

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const res = await fetch(`/api/products/${id}`);
                const data = await res.json();
                if (res.ok) {
                    setProduct(data);
                } else {
                    console.error("Product not found:", data.message);
                }
            } catch (error) {
                console.error("Error fetching product", error);
            } finally {
                setLoading(false);
            }
        };
        fetchProduct();
    }, [id]);

    const handleAddToCart = () => {
        if (product) {
            dispatch(addToCart({
                _id: product._id,
                name: product.name,
                price: product.price,
                imageUrl: product.imageUrl || product.image,
                size: selectedSize,
                quantity: 1,
            }));
            toast.success("Item added to cart!");
        }
    };

    if (loading) {
        return (
            <div style={{ textAlign: "center", margin: '100px', color: '#f97316' }}>
                Loading Product...
            </div>
        );
    }

    if (!product) {
        return (
            <div style={{ textAlign: "center", margin: '100px', color: '#ef4444' }}>
                Product not Found
            </div>
        );
    }

    return (
        <div className="product-container">
            <div className="product-image-container">
                <img 
                    src={product.imageUrl || product.image || "https://placehold.co/600x600?text=No+Image"} 
                    alt={product.name} 
                    className="product-image" 
                    onError={(e) => {
                        e.target.onerror = null;
                        e.target.src = "https://placehold.co/600x600?text=No+Image";
                    }}
                />
            </div>
            <div className="product-info">
                <h1 className="product-title">{product.name}</h1>
                <p className="product-price">${product.price}</p>
                <p className="product-description">{product.description}</p>

                <div className="product-options">
                    <label className="option-label">Select Size</label>
                    <div className="size-options">
                        {["S", "M", "L", "XL", "XXL"].map((size) => (
                            <button 
                                key={size} 
                                className={`size-btn ${selectedSize === size ? "active" : ""}`}
                                onClick={() => setSelectedSize(size)}
                            >
                                {size}
                            </button>
                        ))}
                    </div>
                </div>

                <button className="add-to-cart-btn" onClick={handleAddToCart}>
                    Add to Cart
                </button>
                <Link to="/" className="continue-shopping">
                    Continue Shopping
                </Link>
            </div>
        </div>
    );
};

export default ProductDetail;
