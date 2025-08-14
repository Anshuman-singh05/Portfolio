# 🌐 MERN Stack Portfolio Website

A fully functional and dynamic personal portfolio website built from scratch using the **MERN Stack** (MongoDB, Express.js, React.js, and Node.js).  
It showcases my projects, skills, and provides recruiters and collaborators a direct way to connect with me.

---

## ✨ Features

- **Fully Responsive Design** – Works seamlessly on all devices, from mobile to desktop.
- **Dynamic Project Management** – Projects are fetched from MongoDB and can be added, updated, or deleted from the admin panel.
- **Secure Admin Panel** – Accessed via a hidden `/login` route, protected by **JWT authentication**.
- **Functional Contact Form** – Visitor messages are stored directly in the database.
- **Dark/Light Mode Toggle** – Modern theme switching for enhanced UI experience.
- **Smooth On-Scroll Animations** – Engaging animations with **AOS (Animate On Scroll)**.
- **Modern UI/UX** – Built with **React Bootstrap** for a clean, professional look.

---

## 🛠 Tech Stack

### **Frontend**
- React.js
- React Bootstrap
- React Router
- Axios
- AOS (Animate On Scroll)
- Vite

### **Backend**
- Node.js
- Express.js
- MongoDB with Mongoose
- JSON Web Token (JWT) – Authentication
- bcrypt.js – Password hashing
- CORS

### **Database**
- MongoDB Atlas

---

## 📂 Project Structure

```plaintext
📦 portfolio-mern
 ┣ 📂 backend
 ┃ ┣ 📂 models
 ┃ ┣ 📂 routes
 ┃ ┗ server.js
 ┣ 📂 frontend
 ┃ ┣ 📂 src
 ┃ ┃ ┣ 📂 components
 ┃ ┃ ┣ 📂 pages
 ┃ ┃ ┗ App.jsx
 ┣ .env
 ┣ package.json
 ┗ README.md
