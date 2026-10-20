const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'user', required: true },
    items: [
        {
            productId: { type: mongoose.Schema.Types.ObjectId, ref: 'Product', required: true },
            qty: { type: Number, required: true, min: 1 },
            price: { type: Number, required: true }
        }
    ],
    totalAmount: { type: Number, required: true },
    address: { type: mongoose.Schema.Types.Mixed, required: true },
    paymentId: { type: String },
    status: {
        type: String, 
        enum: ['pending', 'shipped', 'delivered'], 
        default: 'pending'
    }
}, { timestamps: true });

module.exports = mongoose.model('order', orderSchema);