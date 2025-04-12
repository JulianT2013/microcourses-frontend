import React from 'react';
import { useNavigate } from 'react-router-dom';

const CourseCard = ({ course }) => {
  const navigate = useNavigate();

  return (
    <div className="course-card" onClick={() => navigate(`/course/${course.id}`)}>
      <img src={course.image} alt={course.title} />
      <div className="course-content">
        <h3>{course.title}</h3>
        <p>{course.description}</p>
        <p><strong>Hours:</strong> {course.hours}</p>
        <button type="button" className='details-button btn btn-primary'>View Details</button>
      </div>
    </div>
  );
};

export default CourseCard;
