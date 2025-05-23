import React from 'react';
import { useNavigate } from 'react-router-dom';

const CourseCard = ({ course }) => {
  const navigate = useNavigate();

  return (
    <div className="course-card" onClick={() => navigate(`/course/${course._id}`)}>
      <img src={course.image || '/assets/default.jpg'} alt={course.title} />
      <div className="course-content">
        <h3>{course.title}</h3>
        <p>{course.description}</p>
        <p className='small'>⏱ {course.hours || course.duration || 0} hrs</p>
        <button className='details-button btn btn-primary'>View Details</button>
      </div>
    </div>
  );
};

export default CourseCard;
