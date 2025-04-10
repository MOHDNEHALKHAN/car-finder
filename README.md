# 🚗 Car Finder Web App

A fully responsive Car Finder application built using **React + Vite**, with **TailwindCSS** for styling and **JSON Server** as a mock API.

---

## 🔥 Features

- 🔍 Search cars by brand
- 🧰 Filter & Sort cars by price (low to high / high to low)
- 💖 Add/remove cars to Wishlist (stored in LocalStorage)
- 📄 View Car Details
- 📦 Pagination: 10 cars per page with next/prev buttons
- ⚡ Instant UI updates, no page reload

---

## 🛠 Tech Stack

- React + Vite
- TailwindCSS
- JSON Server (for mock backend)
- React Router
- LocalStorage (for wishlist)

---

## ⚙️ Setup Instructions

### 1. 📁 Clone the Repository

```bash
git clone https://github.com/MOHDNEHALKHAN/car-finder.git
cd car-finder
```

### 2. 📦 Install Dependencies
```bash

npm install

```

### 3. 🚀 Start JSON Server (Mock Backend)
📍 Make sure you're in the root folder of the project, not inside /public.

```bash

json-server --watch public/cars.json --port 5000
```
This will start your backend API at:
👉 http://localhost:5000/cars


### 4. 🧾 Start the Frontend (React + Vite)
Open another terminal for frontend , and run:

```bash

npm run dev

```
This will start your app at:
👉 http://localhost:5173