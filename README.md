#  Ride Booking API

A secure, role-based backend API for a ride booking system (like Uber/Pathao) built with **Express.js, Mongoose, and TypeScript**.

---

## 📌 Features
- **Authentication & Authorization**: JWT-based, role-specific access (Admin, Rider, Driver)
- **Rider**: request ride, cancel ride, view ride history
- **Driver**: accept ride, update status, availability toggle, check earnings
- **Admin**: manage users, approve/suspend drivers, block/unblock users, view rides
- **Utilities**: clean modular structure, global error handling, environment-based config

---

## 🛠️ Tech Stack
- **Backend Framework**: Express.js
- **Language**: TypeScript
- **Database**: MongoDB with Mongoose
- **Auth**: JSON Web Token (JWT)
- **Other**: bcrypt, dotenv, cors

---

## 🚀 Getting Started

### 1️⃣ Installation
```bash
npm install

📡 API Endpoints
🔑 Auth

POST /api/auth/register → Register (rider/driver)

POST /api/auth/login → Login (returns JWT)

👤 User

GET /api/users (Admin only) → Get all users

GET /api/users/profile (Self) → Get logged-in user profile

PATCH /api/users/:id/toggle-block (Admin only) → Block/unblock user

🚗 Driver

PATCH /api/drivers/:id/approve (Admin only) → Approve driver

PATCH /api/drivers/:id/suspend (Admin only) → Suspend driver

PATCH /api/drivers/availability (Driver only) → Toggle availability

GET /api/drivers/earnings (Driver only) → View earnings

🛺 Rider

POST /api/rides/request (Rider only) → Request ride

PATCH /api/rides/:id/cancel (Rider only) → Cancel ride

GET /api/rides/history (Rider only) → Ride history
