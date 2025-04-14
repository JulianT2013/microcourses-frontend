# MicroCourses Frontend

This project is the frontend for **MicroCourses**, a fictional educational platform that offers a variety of online micro-courses to learners worldwide. The app provides a responsive and modern user interface for browsing available courses and viewing detailed information about each course. It is built using **React** and serves as part of a micro-credential MERN stack assessment.

---

## 🚀 Project Overview

MicroCourses aims to:
- Display a list of online courses in a visually engaging and responsive layout.
- Allow users to view more detailed information about each course.
- Prepare the frontend structure for potential future integration with backend APIs (MongoDB, Express.js, Node.js).

This frontend is built with **Create React App** and emphasizes reusable components, routing, and mobile-first design using CSS Flexbox/Grid.

---

## 🛠️ Getting Started (Local Setup)

### Prerequisites
Make sure you have **Node.js** and **npm** installed.

### Installation Steps

1. Clone the repository:
   ```bash
   git clone <your-repo-url>
   cd microcourses-frontend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm start
   ```

4. Visit [http://localhost:3000](http://localhost:3000) in your browser.

---

## 📁 Project Structure

```
microcourses-frontend/
├── public/
│   ├── assets/                 # Public images accessible by browser
|   └── index.html              # Entry point 
│
├── src/
│   ├── assets/                 # Local image usage (optional)
│   ├── components/
│   │   ├── CourseCard.js       # Home page course preview card
│   │   ├── CourseList.js       # Lists all courses
│   │   ├── CourseDetail.js     # Individual course detail view
|   |   ├── Header.jsx          # Site Header 
│   │   └── styles.css          # stylesheet
|   |
│   ├── data/
│   │   └── courses.json        # Mock course data used for rendering
|   |
│   ├── App.js                  # Routing setup for home/details
│   ├── index.js                # Entry point
│   └── App.css                 # Global styles
```

---

## 📚 Learn More

- [Create React App Docs](https://create-react-app.dev)
- [React Router](https://reactrouter.com/en/main)
- [React Documentation](https://reactjs.org)

---

## 🔧 Available Scripts

In the project directory, you can run:

- `npm start` — Starts the dev server
- `npm test` — Launches test runner
- `npm run build` — Builds app for production
- `npm run eject` — Ejects app for full control over config

---

Happy coding! 👨‍💻✨
