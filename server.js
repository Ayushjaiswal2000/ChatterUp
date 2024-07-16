import express from 'express';
import { Server } from 'socket.io';
import cors from 'cors';
import http from 'http';
import { connect } from './config.js';
import { chatModel } from './chat.schema.js';

const app = express();
const server = http.createServer(app);
const io = new Server(server, {
    cors: {
        origin: '*',
        methods: ["GET", "POST"]
    }
});

app.use(cors());

connect().then(() => {
    console.log("Connected to the database successfully");
}).catch(err => {
    console.error("Database connection error:", err);
});

let onlineUsers = [];

io.on('connection', (socket) => {
    console.log("Connection is established");

    socket.on("join", async (username) => {
        socket.username = username;
        onlineUsers.push(username);
        io.emit('update_user_list', onlineUsers);
    
        try {
            const messages = await chatModel.find().sort({ timestamp: 1 }).limit(50);
            socket.emit('load_messages', messages);
    
            let user = await chatModel.findOne({ username });
            if (!user) {
                user = new chatModel({
                    username,
                    avatar: 'https://img.freepik.com/premium-vector/man-character_665280-46970.jpg' // Default avatar URL
                });
                await user.save();
            }
            socket.avatar = user.avatar;
        } catch (err) {
            console.error("Error handling user join:", err);
        }
    });

    socket.on('new_message', async (message) => {
        const userMessage = {
            username: socket.username,
            message: message,
            avatar: socket.avatar
        };
    
        try {
            const newChat = new chatModel({
                username: socket.username,
                message: message,
                timestamp: new Date(),
                avatar: socket.avatar
            });
    
            await newChat.save();
            socket.broadcast.emit('broadcast_message', userMessage);
        } catch (err) {
            console.error("Error saving message:", err);
        }
    });

    socket.on('typing', () => {
        socket.broadcast.emit('typing', socket.username);
    });

    socket.on('stop_typing', () => {
        socket.broadcast.emit('stop_typing');
    });

    socket.on('disconnect', () => {
        console.log("Connection is disconnected");
        onlineUsers = onlineUsers.filter(user => user !== socket.username);
        io.emit('update_user_list', onlineUsers);
    });
});

server.listen(3000, () => {
    console.log("App is listening on port 3000");
});
