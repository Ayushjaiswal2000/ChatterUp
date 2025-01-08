# ChatterUp - Real-Time Chat Application 💬

[Click here to visit the application!](https://chatterup-ljdn.onrender.com/)

---

## Overview 🌟

**ChatterUp** is a **real-time chat application** built with **Node.js**, **Express**, and **Socket.io**. It allows users to join a chat room, send messages, see who is online, and receive real-time updates. The app features a simple and interactive interface with persistent chat history stored in **MongoDB**.

---

## Features ✨

- **Real-time messaging** with **Socket.io** 🔄
- **Online user list** 👤
- **Typing indicators** ⌨️
- **Responsive design** 📱💻
- **Persistent chat history** stored in **MongoDB** 💾
- **Default user avatars** 🖼️

---

## Technologies Used ⚙️

- **Node.js** 🟩
- **Express** 🚂
- **Socket.io** 🌐
- **MongoDB** 🌱
- **Mongoose** 🛠️
- **HTML** 📄
- **CSS** 🎨
- **JavaScript** 📝

---

## Prerequisites ⚠️

- **Node.js** 🟢
- **MongoDB** 🟢

---

## Usage 🚀

1. Open the application in your browser.
2. Enter your **username** when prompted.
3. Start chatting with other users! 💬

---

## File Structure 📂

- **index.html**: The main HTML file for the chat application.
- **client.css**: The CSS file for styling the application.
- **server.js**: The main server file that sets up Express and Socket.io, and handles socket events.
- **config.js**: Configuration file for connecting to MongoDB.
- **chat.schema.js**: Mongoose schema for storing chat messages in MongoDB.

---

## Socket Events ⚡

- **join**: Triggered when a user joins the chat.
- **new_message**: Triggered when a user sends a new message.
- **typing**: Triggered when a user starts typing.
- **stop_typing**: Triggered when a user stops typing.
- **disconnect**: Triggered when a user disconnects.

---

## Preview 📸

![Chatter Up](https://github.com/user-attachments/assets/5acd7db2-ceec-4e77-8b87-46dffb583a65)

---

## License 📜

This project is open-source and available under the [MIT License](LICENSE).
