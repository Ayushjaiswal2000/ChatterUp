import mongoose from 'mongoose';

const chatSchema = new mongoose.Schema({
    username: String,
    message: String,
    timestamp: { type: Date, default: Date.now },
    avatar: { type: String, default: 'https://img.freepik.com/premium-vector/man-character_665280-46970.jpg' } // Default avatar URL
});

export const chatModel = mongoose.model('Chat', chatSchema);
