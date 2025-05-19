import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CourseList from './components/CourseList';
import CourseDetail from './components/CourseDetail';
import Header from './components/Header';

const App = () => (
  <Router>
    <div className="app-container">
      <Header />
      <Routes>
        <Route path="/" element={<CourseList />} />
        <Route path="/course/:id" element={<CourseDetail />} />
      </Routes>
    </div>
  </Router>
);

export default App;
