# ShopNest - Full Stack E-Commerce (MERN)

A modern Full-Stack E-Commerce web application built using the MERN stack (MongoDB, Express.js, React, Node.js).

## 🚀 Features

- **Authentication & Authorization**: JWT-based login/registration, password hashing with bcrypt, role-based access.
- **Product Management**: Browse, search, filter products, category management, image uploads via ImageKit/Multer.
- **Cart & Wishlist**: Add to cart, update quantities, real-time total calculations.
- **Checkout & Orders**: Address management, order placement, Razorpay payment gateway integration.
- **Admin Dashboard**: Analytics, order status tracking, product inventory management.

---

## 🛠️ Tech Stack

- **Frontend**: React.js, Vite, Vanilla CSS / TailwindCSS, Lucide Icons, Axios
- **Backend**: Node.js, Express.js (v5)
- **Database**: MongoDB with Mongoose ODM
- **Media Storage**: ImageKit.io
- **Payment Gateway**: Razorpay
- **Mailing**: Nodemailer

---

## 📦 Getting Started

### 1. Clone the repository
```bash
git clone https://github.com/<your-username>/<your-repo-name>.git
cd <your-repo-name>
```

### 2. Install Dependencies
```bash
# Install root dependencies
npm install

# Install frontend dependencies
cd frontend
npm install
cd ..
```

### 3. Environment Variables Setup
Create a `.env` file in the `backend/` folder following `backend/.env.example`:
```env
PORT=5000
MONGO_URI=mongodb://localhost:27017/shopnest-mern
JWT_SECRET=your_jwt_secret_key
IMAGEKIT_PUBLIC_KEY=your_imagekit_public_key
IMAGEKIT_PRIVATE_KEY=your_imagekit_private_key
IMAGEKIT_URL_ENDPOINT=https://ik.imagekit.io/your_endpoint
```

### 4. Run Locally
```bash
# Run both backend and frontend concurrently
npm run dev
```
- Backend runs on `http://localhost:5000`
- Frontend runs on `http://localhost:5173`
