# Forever – E-Commerce Web Application

A full-stack e-commerce platform built with the **MERN stack** (MongoDB, Express, React, Node.js). The application provides separate interfaces for customers and administrators to browse products, manage inventory, and process secure online payments.

---

## 📋 Features

### Customer Features
- **Product Browsing** - Browse and search products with detailed information
- **Shopping Cart** - Add, update, and remove items from cart
- **Order Placement** - Checkout with delivery information
- **Payment Integration** - Secure Stripe payment gateway integration
- **Order Tracking** - View order history and status
- **User Authentication** - Secure login and registration

### Admin Features
- **Product Management** - Add, edit, and delete products
- **Image Upload** - Cloudinary integration for product images
- **Order Management** - View and update order status
- **Inventory Control** - Track product availability
- **Admin Dashboard** - Centralized management panel

---

## 🛠️ Tech Stack

### Frontend
- **React 19** - UI library
- **Vite** - Build tool and dev server
- **React Router DOM** - Client-side routing
- **Tailwind CSS** - Styling
- **Axios** - HTTP requests
- **React Toastify** - Notifications

### Backend
- **Node.js** - Runtime environment
- **Express.js** - Web framework
- **MongoDB** - NoSQL database
- **Mongoose** - ODM library
- **JWT** - Authentication tokens
- **Bcrypt** - Password hashing
- **Stripe** - Payment gateway
- **Cloudinary** - Image hosting
- **Multer** - File uploads

---

## 📂 Project Structure

```
E-commerce/
├── frontend/              # React frontend application
│   ├── src/
│   │   ├── components/   # Reusable components
│   │   ├── pages/        # Page components
│   │   ├── context/      # Context API for state management
│   │   ├── assets/       # Images and static files
│   │   └── App.jsx       # Main app component
│   └── package.json
│
├── backend/               # Express backend server
│   ├── controllers/      # Request handlers
│   ├── models/           # MongoDB schemas
│   ├── routes/           # API endpoints
│   ├── middleware/       # Custom middlewares
│   ├── config/           # Configuration files
│   ├── server.js         # Entry point
│   └── package.json
│
├── admin/                 # Admin dashboard
│   ├── src/
│   │   ├── components/   # Admin UI components
│   │   ├── pages/        # Admin pages
│   │   └── App.jsx
│   └── package.json
│
└── README.md
```

---

## 🚀 Getting Started

### Prerequisites
- Node.js (v18 or higher)
- MongoDB local or cloud instance
- Stripe account for payment processing
- Cloudinary account for image hosting

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd E-commerce
   ```

2. **Setup Backend**
   ```bash
   cd backend
   npm install
   ```

3. **Setup Frontend**
   ```bash
   cd ../frontend
   npm install
   ```

4. **Setup Admin Panel**
   ```bash
   cd ../admin
   npm install
   ```

### Configuration

Create `.env` files in the `backend` directory with the following variables:

```env
# Backend Environment Variables
PORT=5000
MONGODB_URI=<your-mongodb-connection-string>
JWT_SECRET=<your-jwt-secret-key>
STRIPE_SECRET_KEY=<your-stripe-secret-key>
CLOUDINARY_NAME=<your-cloudinary-name>
CLOUDINARY_API_KEY=<your-cloudinary-api-key>
CLOUDINARY_API_SECRET=<your-cloudinary-api-secret>
```

### Running the Application

**Backend:**
```bash
cd backend
npm run server    # Development with nodemon
# or
npm start         # Production
```

**Frontend:**
```bash
cd frontend
npm run dev       # Development
```

**Admin Panel:**
```bash
cd admin
npm run dev       # Development
```

The application will be available at:
- Frontend: `http://localhost:5173`
- Admin: `http://localhost:5174`
- Backend API: `http://localhost:5000/api`

---

## 🔌 API Endpoints

### User Routes
- `POST /api/user/register` - Register new user
- `POST /api/user/login` - User login
- `POST /api/user/admin-login` - Admin login

### Product Routes
- `GET /api/product/list` - Get all products
- `POST /api/product/add` - Add new product (Admin)
- `POST /api/product/remove` - Remove product (Admin)

### Cart Routes
- `POST /api/cart/add` - Add item to cart
- `POST /api/cart/remove` - Remove item from cart
- `POST /api/cart/get` - Get user cart
- `POST /api/cart/update` - Update cart item quantity

### Order Routes
- `POST /api/order/place` - Place COD order
- `POST /api/order/stripe` - Create Stripe payment session
- `POST /api/order/verifyStripe` - Verify Stripe payment
- `POST /api/order/list` - Get all orders (Admin)
- `POST /api/order/status` - Update order status (Admin)
- `POST /api/order/userorders` - Get user orders

---

## 💳 Payment Integration

The application integrates with **Stripe** for secure online payments:

1. User selects Stripe payment method
2. Checkout session is created via backend
3. User is redirected to Stripe Checkout
4. Payment is verified and order is confirmed

---

## 🔐 Security Features

- **JWT Authentication** - Secure token-based authentication
- **Password Hashing** - Bcrypt for secure password storage
- **Authorization Middleware** - Role-based access control
- **Environment Variables** - Sensitive data protection
- **CORS** - Cross-origin request handling

---

## 📝 License

This project is open source and available under the ISC License.

---

## 👨‍💻 Author

Built by [Your Name/Organization]

---

## 📧 Support

For issues or questions, please create an issue in the repository or contact the development team.

