import express from 'express';
import cors from 'cors';
import 'dotenv/config';
import connectDB from './config/mongodb.js';
import connectCloudinary from './config/cloudinary.js';
import userRouter from './routes/userRoute.js';
import  productRouter  from './routes/productRoute.js';
import cartRouter from './routes/cartRoute.js';
import orderRouter from './routes/orderRoute.js';

//App config
const app = express();
const PORT = process.env.PORT || 5000;
connectDB();
connectCloudinary();

//Middlewares
const corsOptions = {
  origin: [
    'http://localhost:5173',
    'http://localhost:5174',
    'https://e-commerce-frontend-seven-gray.vercel.app',
    'https://e-commerce-admin-vercel.vercel.app' // Add your admin URL if different
  ],
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization', 'token']
};

app.use(cors(corsOptions));
app.use(express.json());

//API Endpoints
app.use("/api/user",userRouter);
app.use("/api/product",productRouter);
app.use("/api/cart",cartRouter)
app.use("/api/order",orderRouter)

app.get('/', (req, res) => {
    res.status(200).send('API is running');
});

//Listener
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});