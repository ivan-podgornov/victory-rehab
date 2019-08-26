import { Schema, model } from 'mongoose';

const ReviewSchema = new Schema({
    name: { type: String, required: true },
    phone: { type: String, required: true },
    text: { type: String, required: true },
    approved: { type: Boolean, default: false },
}, {
    versionKey: false,
});

export default model('Review', ReviewSchema, 'reviews');
