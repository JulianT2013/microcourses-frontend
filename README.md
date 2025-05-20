
# 🔗 MicroCourses — Full Stack Fork (Frontend + Backend Integration)

## 🧭 Project Overview

This fork combines the **Component 1 frontend (React)** and **Component 2 backend (Node.js + Express + MongoDB)** into a fully integrated microlearning platform.

The goal is to provide a responsive, theme-aware, and real-time connected UI for exploring and managing online course content.

> Includes custom light/dark mode toggle, Bootstrap styling, dynamic routing, and MongoDB Atlas or local DB support.

---

## 🚀 Getting Started

### 📁 Folder Structure

```
microcourses-fullstack/
├── frontend/              # React app
│   ├── src/
│   │   ├── components/    # CourseCard, CourseList, CourseDetail, Header
│   │   ├── data/          # Optional JSON mock data
│   │   ├── App.js         # Routing setup
│   │   └── index.js       # App entry point
│   └── public/
│       └── assets/        # Logo + images
│
├── backend/               # Express server
│   ├── routes/            # courseRoutes.js
│   ├── models/            # Course.js (Mongoose schema)
│   ├── .env               # Mongo credentials
│   ├── server.js          # Server entry point
│   └── package.json
```

---

## 🧩 Code Overview

| File                      | Description |
|---------------------------|-------------|
| `frontend/src/components/CourseCard.js` | Renders individual course as a card layout, links to details |
| `frontend/src/components/CourseList.js` | Maps all fetched courses into cards |
| `frontend/src/components/CourseDetail.js` | Fetches course by ID and renders full info |
| `frontend/src/components/Header.js` | Persistent header with dark/light toggle |
| `frontend/src/api.js`    | Axios wrapper for backend API requests |
| `backend/routes/courseRoutes.js` | Express routes for GET/POST endpoints |
| `backend/models/Course.js` | Mongoose schema for course structure |
| `backend/server.js`      | Initialises Express, connects to MongoDB, mounts routes |

---

## ⚙️ Technical Details

### React (Frontend)
- `CourseCard`: Receives a `course` object and routes to `CourseDetail` using React Router.
- `CourseList`: Calls `GET /courses` and passes course data to cards.
- `CourseDetail`: Fetches individual course via `GET /courses/:id` and displays all fields.
- `Header`: Manages theme toggle and branding.
- `api.js`: Axios abstraction layer (see below).

### Express + MongoDB (Backend)
- `GET /courses`: Fetch all courses from MongoDB.
- `GET /courses/:id`: Fetch a single course by ID.
- `POST /courses`: Create new course.
- `server.js`: Supports switching between local and Atlas MongoDB via `.env` and `USE_LOCAL` flag.

---

## 🧠 Problem-Solving

- **Data Sync**: Transitioned from local JSON to live backend data by replacing static import with API fetch using Axios.
- **Routing Conflicts**: Aligned frontend route paths (`/course/:id`) with backend expectations (`/courses/:id`) and updated all navigation accordingly.
- **Theme Styles**: Extended Bootstrap card and button classes to react to data-theme and variables.
- **Missing Images/Data**: Added fallback support for optional fields like `image`, `instructor`, or `duration`.

---

## 🌟 Achievements

- 🎯 Seamless integration of UI and backend with persistent styling
- 🌗 Light/Dark mode support tied to body data attribute and updated dynamically
- 🌐 Switchable backend (local vs. MongoDB Atlas)
- 🔁 Frontend fully refactored to pull from live data source
- 🔍 Robust routing and fallback states for loading / missing data

---

## 🔧 Setup Notes

- Start MongoDB locally (`mongod`) or ensure Atlas credentials are correct
- Use two terminals:
  ```bash
  # Terminal 1
  cd backend
  npm run dev

  # Terminal 2
  cd frontend
  npm start
  ```

> Make sure CORS is enabled in the backend, and frontend API base URL is correct in `api.js`.

---

## 📦 Why Axios Was Included

Although the use of Axios was not explicitly required in the project assessment, it was deliberately chosen and integrated into the frontend to improve the efficiency and clarity of API interactions.

### ✅ Reasoning Behind Axios Integration

| Benefit | Explanation |
|--------|-------------|
| **1. Simplified Syntax** | Axios provides a cleaner and more concise syntax compared to the native `fetch` API. For example, handling JSON response parsing is automatic (`res.data`) instead of manual (`res.json()`). |
| **2. Built-in Error Handling** | Axios makes it easier to catch HTTP errors and inspect response status codes and headers. |
| **3. Request Configuration** | It simplifies setting base URLs, headers, timeouts, and interceptors — which is especially helpful when connecting to different environments (local, cloud, etc.). |
| **4. Consistency** | Using a dedicated HTTP client promotes modularity and a uniform pattern across all API calls. |
| **5. Scalability** | Axios enables future enhancements like adding interceptors for authentication tokens or global error handling logic. |

### 📁 Implementation Location

Axios is abstracted through a helper file:  
`frontend/src/api.js`

```js
import axios from 'axios';

const API_BASE_URL = 'http://localhost:5000';

export const fetchCourses = () => axios.get(`${API_BASE_URL}/courses`);
export const fetchCourseById = (id) => axios.get(`${API_BASE_URL}/courses/${id}`);
```

> 🧠 This keeps components clean and allows for one-point maintenance if API structure changes.
