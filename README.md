# 🛠️ Engineering Resource Management System

A full-stack web application to manage engineering team assignments across projects. Built with **Node.js**, **MongoDB**, and **React (Vite + TypeScript)**.

## 🌟 Features

- 🔐 Authentication with JWT (Manager & Engineer roles)
- 👥 Engineer Management (skills, seniority, capacity)
- 📁 Project Tracking (tech stack, duration, team size)
- 📊 Assignment System (with capacity %)
- 👨‍💼 Manager Dashboard
- 👷 Engineer Dashboard

---

## 🧰 Tech Stack

| Frontend             | Backend          | Database   |
|----------------------|------------------|------------|
| React + TypeScript   | Node.js + Express| MongoDB    |
| Vite                 | Mongoose         |            |
| CSS Modules          | JWT Auth         |            |

---

## 🚀 Getting Started

### 1. Clone the Repo

```bash
git clone https://github.com/your-username/engineering-resource-manager.git
cd engineering-resource-manager
2. Backend Setup (/backend)

cd backend
npm install

Create a .env file:
PORT=5000
MONGO_URI=mongodb://localhost:27017/engineering_db
JWT_SECRET=your_jwt_secret

Run Backend:
npm start

Frontend Setup (/frontend)
cd ../frontend
npm install

Start Frontend:
npm run dev

Note
You must have MongoDB running locally