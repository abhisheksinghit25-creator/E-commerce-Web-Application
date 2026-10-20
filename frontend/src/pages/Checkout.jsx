import React, { useState, useContext } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import { clearCart } from '../redux/cartSlice';

const Checkout = () => {
    const { user } = useContext(AuthContext);
    const cartItems = useSelector((state) => state.cart.cartItems);
    const dispatch = useDispatch();
    const navigate = useNavigate();


    const [address,setAddress] = useState({
        fullName: '', street: '', city: '', postalCode: '', country: ''
    });

    const totalPrice = cartItems.reduce((acc,item) => acc + item.price * item.qty, 0);

    const handlePayment = async () => {
        try {
            const res = await fetch('/api/payment/order', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ amount: totalPrice })
            });
            const orderData = await res.json();
            
        } catch (error) {
            console.error("Payment error:", error);
        }
    };
        
    

    return (
        <div>
            {/* Yahan se code likhna shuru karein */}
        </div>
    );
};

export default Checkout;