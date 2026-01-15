import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({    
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    cartData: {
        type: Object,
        default: {}
    }
    
},{minimize: false});// To prevent Mongoose from removing empty objects

// Check if the model already exists to avoid OverwriteModelError

const userModel = mongoose.models.user || mongoose.model('user', userSchema);

export default userModel;