import React from 'react';
import courses from '../data/courses.json';
import CourseCard from './CourseCard';
import './styles.css';


const CourseList = () => {
  return (
    <div className="course-list">
      {courses.map(course => (
        <CourseCard key={course.id} course={course} />
      ))}
    </div>
  );
};

export default CourseList;