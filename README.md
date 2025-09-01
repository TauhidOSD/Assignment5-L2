# Ride Booking API

Secure, role-based backend (Express + Mongoose + TypeScript).

## Features
- JWT Auth, Role-based (admin, rider, driver)
- Rider: request/cancel, history
- Driver: accept, status update, earnings, availability
- Admin: users/drivers/rides management
- Clean modular structure, global error handler

## Run
```bash
npm install
npm run seed   # creates admin (admin@example.com / 123456)
npm run dev