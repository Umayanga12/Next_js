//who can talk to database
import mongoose from "mongoose"


const userSchema = mongoose.Schema({
    username: { 
        type: String, 
        required: [true, "Please Provide a user name "],
        unique:true,
    },
    email: { 
        type: String, 
        required: [true, "Please Provide the email"], 
        unique:true 
    },
    password: { 
        type: String,
        required: [true,"Please Enter the password"],
    },
    isVerfied: {
        type: Boolean,
        default: false,
    },
    isAdmin: {
        type: Boolean,
        default: false,
    },
    forgotpasswordToken: String,
    forgotpasswordExpiry: Date,
    verifyToken: String,
    verifyTokenExpiry: Date,


})

const userModel = mongoose.models.users || mongoose.model
("users",userSchema);

export default userModel;