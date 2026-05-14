# Silver Tales Jewellery Website

A premium full-stack jewellery showcase and inquiry website built using React, TypeScript, Tailwind CSS, Framer Motion, and Node.js.

The website features a luxury dark-gold UI theme, animated sections, team showcase, responsive layouts, and a custom contact form that stores inquiries in a JSON file.

---

# Features

## Frontend

* Premium luxury UI design
* Fully responsive layout
* Smooth animations using Framer Motion
* Modern dark + gold aesthetic
* Team showcase section
* Contact form with validation
* Loading animations and success notifications
* Custom hover effects and glow effects
* Mobile-friendly design

## Backend

* Express.js server
* JSON-based data storage
* Contact inquiry saving API
* Error handling
* CORS enabled

---

# Tech Stack

## Frontend

* React
* TypeScript
* Tailwind CSS
* Framer Motion
* Lucide React Icons
* React Icons
* Vite

## Backend

* Node.js
* Express.js
* CORS
* File System (fs)

---

# Project Structure

```bash
project-root/
│
├── public/
├── src/
│   ├── assets/
│   ├── components/
│   ├── pages/
│   ├── App.tsx
│   └── main.tsx
│
├── storage/
│   └── data.json
│
├── server.cjs
├── package.json
├── vite.config.ts
└── README.md
```

---

# Installation

## Clone Repository

```bash
git clone https://github.com/your-username/your-repository-name.git
```

```bash
cd your-repository-name
```

---

# Install Dependencies

```bash
npm install
```

---

# Run Frontend

```bash
npm run dev
```

Frontend will start on:

```bash
http://localhost:5173
```

---

# Run Backend

Open another terminal and run:

```bash
node server.cjs
```

Backend will start on:

```bash
http://localhost:5000
```

---

# Contact Form API

## Save Form Data

### Endpoint

```bash
POST /save
```

### Example Request Body

```json
{
  "name": "John Doe",
  "phone": "9876543210",
  "message": "Interested in custom jewellery"
}
```

---

# Form Features

* Required field validation
* Phone number validation
* Loading state
* Success toast notification
* Error handling
* Automatic form reset

---

# Deployment

## Recommended Hosting

### Frontend + Backend Together

* Render

### Frontend Only

* Vercel

---

# Future Improvements

* MongoDB integration
* Admin dashboard
* WhatsApp API integration
* Authentication system
* Online order system
* Product management panel
* Image upload support
* Payment gateway integration

---

# Author

## Silver Tales Team

* Hitesh Verma — Founder
* Paarth Khanna — Designer & Developer

---

# License

This project is for educational and portfolio purposes.
