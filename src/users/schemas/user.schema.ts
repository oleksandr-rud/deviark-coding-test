import * as mongoose from 'mongoose';

export const UserSchema = new mongoose.Schema({
    name: String,
    email: Number,
    password: String,
}, { timestamps: { createdAt: true, updatedAt: true } });
