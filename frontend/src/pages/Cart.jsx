import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { addToCart, removeFromCart, clearCart } from "../redux/cartSlice";

const Cart = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();


const { cartItems } = useSelector((state) => state.cart|| { cartItems: []});

// Calculate total price of items in cart

const subtotal = cartItems.reduce((acc, item ) => acc + (item.price|| 0) * (item.quantity || item.qty || 1),0);

// function of delete items

const handleRemove = (id) => {
    dispatch(removeFromCart(id));
};

// function to change item quantity
const handleQuantityChange = (item, qty) => {
    if (Number(qty) <= 0) {
        dispatch(removeFromCart(item._id));
    } else {
        dispatch(addToCart({ ...item, quantity: Number(qty), qty: Number(qty) }));
    }
};

if (cartItems.length === 0) {
    return (
        <div style = {{ textAlign: "center", padding:"50px 20px"}}>
            <h2> your Cart is Empty</h2>
            <p style={{ color:"#666",marginTop:"10px" }}> you have no items in your shopping cart.</p>
            <Link to = '/' style={{ display: "inline-block",marginTop: "20px",padding:"10px 20px",backgroundColor: "#2563eb",color:"white",textDecoration:"none",borderRadius:"6px"}}>start shopping</Link>
        </div>
    );
}
 return (
    <div style={{ maxWidth: "1000px", margin: "30px auto", padding: "0 20px" }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <h2>Shopping Cart ({cartItems.length} items)</h2>
        <button
          onClick={() => dispatch(clearCart())}
          style={{
            background: "none",
            border: "none",
            color: "#ef4444",
            cursor: "pointer",
            fontWeight: "bold",
          }}
        >
          Clear Cart
        </button>
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr", gap: "30px", marginTop: "20px" }}>


        {/* Cart Items List */}

        <div>
          {cartItems.map((item) => (
            <div
              key={item._id}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "20px",
                padding: "15px",
                borderBottom: "1px solid #e5e7eb",
              }}
            >
              <img
                src={item.imageUrl || item.image || "https://placehold.co/100"}
                alt={item.name}
                style={{ width: "80px", height: "80px", objectFit: "cover", borderRadius: "8px" }}
              />
              <div style={{ flex: 1 }}>
                <h4 style={{ margin: 0 }}>{item.name}</h4>
                <p style={{ color: "#2563eb", fontWeight: "bold", margin: "5px 0" }}>
                  ${Number(item.price).toFixed(2)}
                </p>
                <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                  <label>Qty:</label>
                  <select
                    value={item.quantity || item.qty || 1}
                    onChange={(e) => handleQuantityChange(item, e.target.value)}
                    style={{ padding: "4px 8px", borderRadius: "4px" }}
                  >
                    {[...Array(10).keys()].map((x) => (
                      <option key={x + 1} value={x + 1}>
                        {x + 1}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
              <button
                onClick={() => handleRemove(item._id)}
                style={{
                  background: "#fee2e2",
                  color: "#dc2626",
                  border: "none",
                  padding: "6px 12px",
                  borderRadius: "6px",
                  cursor: "pointer",
                }}
              >
                Remove
              </button>
            </div>
          ))}
        </div>

        {/* Order Summary Box */}
        
        <div
          style={{
            padding: "20px",
            border: "1px solid #e5e7eb",
            borderRadius: "8px",
            height: "fit-content",
            backgroundColor: "#f9fafb",
          }}
        >
          <h3>Order Summary</h3>
          <div style={{ display: "flex", justifyContent: "space-between", margin: "15px 0" }}>
            <span>Subtotal:</span>
            <span style={{ fontWeight: "bold" }}>${subtotal.toFixed(2)}</span>
          </div>
          <div style={{ display: "flex", justifyContent: "space-between", margin: "15px 0" }}>
            <span>Shipping:</span>
            <span style={{ color: "#16a34a" }}>Free</span>
          </div>
          <hr style={{ margin: "15px 0", borderColor: "#e5e7eb" }} />
          <div style={{ display: "flex", justifyContent: "space-between", fontSize: "1.2rem", fontWeight: "bold" }}>
            <span>Total:</span>
            <span>${subtotal.toFixed(2)}</span>
          </div>
          <button
            onClick={() => navigate("/checkout")}
            style={{
              width: "100%",
              marginTop: "20px",
              padding: "12px",
              backgroundColor: "#2563eb",
              color: "white",
              border: "none",
              borderRadius: "6px",
              fontSize: "1rem",
              fontWeight: "bold",
              cursor: "pointer",
            }}
          >
            Proceed to Checkout
          </button>
        </div>
      </div>
    </div>
  );
};
export default Cart;


