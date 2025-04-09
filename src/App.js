import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CourseList from './components/CourseList';
import CourseDetail from './components/CourseDetail';

function App() {
  return (
    <Router>
      <div className="app-container">
        <Routes>
          <Route path="/" element={<CourseList />} />
          <Route path="/course/:id" element={<CourseDetail />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
