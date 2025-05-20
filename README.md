# MicroCourses — Project Overview (Front-end)

## 🧭 Project Goals
The MicroCourses platform aims to deliver an intuitive and efficient user experience for:
- 🧭 Browsing a catalog of courses
- 📘 Accessing rich, detailed course information
- 🎯 Supporting future enrollment workflows

As the platform experiences growth, there's a pressing need for a modern, scalable, and responsive web application that effectively showcases their course offerings. 

> 📝 **Note:** While light/dark mode support and Bootstrap integration were not explicitly required in the project brief, they were implemented to enhance the user experience, accessibility, and maintainability — aligning with best practices for modern, user-centric web applications.

**Git repository** can be found at: https://github.com/JulianT2013/microcourses-frontend

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

## 🧩 Code Overview

| File | Purpose |
|------|---------|
| `CourseCard.js` | Displays a single course using a Flexbox. Dynamically styles content based on theme (light/dark). |
| `CourseList.js` | Renders all available courses in a responsive layout by mapping over course data and rendering `CourseCard` components. |
| `bootstrap.min.css` | Linked in `index.html`. Provides responsive layout styling, enabling a 5-column layout using Flexbox. Includes overrides to align Bootstrap with project theme variables. |

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

## ⚙️ Technical Details

### CourseCard.js
- **Inputs**: `course` object (`id`, `title`, `description`, `hours`, `image`)
- **Behaviour**: Dynamically styles based on current theme, navigates to course details, renders Flexbox card
- **Output**: A fully styled, interactive course preview

### CourseList.js
- **Inputs**: Static course data from JSON
- **Behaviour**: Iterates through course list and renders `CourseCard` for each
- **Output**: Full course listing, responsive and visually structured

### bootstrap.min.css
- Custom Flexbox grid to simulate 5-column layout across screen sizes (300px width cards)
- **Theme integration:** CSS variables aligned to `data-theme` for light/dark support
- Implemented Bootstrap buttons (.btn, .btn-primary, .btn-secondary, .btn-dark, .btn-light)

---

## 🛠️ Problem-Solving

### 1. Bootstrap doesn’t support 5-column grids
- 🔍 **Issue**: Bootstrap only supports 1-4-6-12 columns
- ✅ **Fix**: Retained custom Flexbox layout and implemented media queries to simulate 5 evenly spaced cards.

### 2. Card responsiveness across devices
- **🔍 Issue:** Course cards displayed inconsistently across screen sizes and devices
- **✅ Fix:** Refined layout styles with media queries and tested in responsive design mode to ensure cards resized and aligned                consistently across breakpoints
---

## 🌟 Achievements

- 🧱 Created modular, reusable components (CourseCard, CourseList) that scale well
- 📱 Fully mobile-first, with elegant responsiveness down to 320px screen widths
- 🚀 Maintained Bootstrap styling consistency while integrating a custom responsive layout
- 🌗 Enabled live theme switching with dynamic class assignments 
  - Light/Dark toggle = user-friendly and accessible
