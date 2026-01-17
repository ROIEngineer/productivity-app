## 📌 Project Title

**Productivity App**
*A full-stack productivity application for managing tasks and focus.*

---

## 🧠 Overview

This is a full-stack productivity application that allows users to manage todos, stay organized, and focus on tasks. The project demonstrates real-world frontend–backend integration, persistent data storage, and clean application architecture.

---

## ✨ Features

* Create and view todos
* Persistent storage using SQLite
* RESTful API built with Express
* React frontend with loading and error states
* Clean separation of concerns (routes, controllers, components)

---

## 🧱 Tech Stack

### Frontend

* React
* Vite
* JavaScript (ES6+)

### Backend

* Node.js
* Express
* SQLite

---

## 🏗️ Architecture

```
Browser (React)
   ↓ HTTP
Express API
   ↓
SQLite Database
```

* Backend acts as the source of truth
* Frontend mirrors backend state for rendering
* REST API defines a clear contract between layers

---

## 🔌 API Endpoints

### `GET /todos`

Returns all todos.

**Response**

```json
[
  {
    "id": 1,
    "title": "Learn full-stack development",
    "completed": 0
  }
]
```

---

### `POST /todos`

Creates a new todo.

**Request Body**

```json
{
  "title": "Build a productivity app"
}
```

---

## 🚀 Getting Started

### Prerequisites

* Node.js (v18+ recommended)

---

### Backend Setup

```bash
cd backend
npm install
node index.js
```

Server runs on:

```
http://localhost:3000
```

---

### Frontend Setup

```bash
cd frontend
npm install
npm run dev
```

App runs on:

```
http://localhost:5173
```

---

## 📈 What This Project Demonstrates

* Full-stack data flow (React ↔ Express ↔ SQLite)
* REST API design
* Async JavaScript and error handling
* State management in React
* Backend persistence and schema design
* Refactoring and clean architecture

---

## 🛠️ Planned Improvements

* Edit and delete todos
* Toggle completed state
* Notes and reminders
* Pomodoro timer
* Authentication and multi-user support
* Deployment

---

## 📸 Screenshots

*(Add screenshots here once UI is polished)*

---

## 🧠 Lessons Learned

* Designing backend contracts before frontend simplifies development
* Separation of concerns improves maintainability
* Persistent storage is essential for real-world applications
* Refactoring without breaking functionality is a critical engineering skill

---

## 👤 Author

**Harold Durant**
GitHub: [https://github.com/ROIEngineer](https://github.com/ROIEngineer)

