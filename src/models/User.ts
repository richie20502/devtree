import mongoose, { Schema } from "mongoose";

export interface IUser {
    handle: string,
    name: String,
    email: String,
    password: String,
}

const userSchema = new Schema({
    handle: {
        type: String,
        required: true,
        trim: true,
        lowercase: true,
        unique: true
    },
    name: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        trim: true,
        unique: true,
        lowercase: true
    },
    password: {
        type: String,
        required: true,
        trim: true
    }
})

const User = mongoose.model<IUser>('User', userSchema);
export default User;