const express = require('express');
const cors = require("cors");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const path = require("path");
dotenv.config({ path: path.join(__dirname, ".env") });

connectDB();

const app = express();
app.use(cors({
    origin: 'http://localhost:5173',
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization'],
    credentials: true
}));
app.use(express.json());
app.use(express.urlencoded({extended:true}));


app.get("/",(req,res) =>{
    res.send("ShopNest Backend is Working Properly!")
});

app.use("/api/auth",require('./routes/authRoutes'))
app.use('/api/products',require('./routes/productRoutes'));
app.use('/api/orders',require('./routes/orderRoutes'));
//app.use('/api/payment',require('./routes/paymentRoutes'));
app.use('/api/analytics',require('./routes/analyticsRoutes.js'));




const PORT = process.env.PORT || 5000;

app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
});

