import express from 'express'
import { placeOrder,  placeOrderStripe,allOrders, userOrders, updateStatus, verifyStripe } from '../controllers/orderController.js';
import userAuth from '../middleware/auth.js';
import adminAuth from '../middleware/adminAuth.js';

const orderRouter= express.Router();

//Admin Panel - All Orders
orderRouter.post('/list',adminAuth,allOrders);
orderRouter.post('/status',adminAuth,updateStatus);

//Payment Features
orderRouter.post('/place',userAuth,placeOrder);
orderRouter.post('/stripe',userAuth,placeOrderStripe);


//User Orders for Frontend
orderRouter.post('/userorders',userAuth,userOrders);

// verify payment
orderRouter.post('/verifyStripe',userAuth,verifyStripe)


export default orderRouter