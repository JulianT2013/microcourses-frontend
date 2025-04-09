import React from 'react';
import { useParams } from 'react-router-dom';
import courses from '../data/courses.json';
import { useNavigate } from 'react-router-dom';


const CourseDetail = () => {
    const { id } = useParams();
    const course = courses.find(c => c.id === id);
    const navigate = useNavigate();


    if (!course) return <div>Course not found.</div>;

    return (
        <div className="course-detail">
            <img src={course.image} alt={course.title} />
            <h2>{course.title}</h2>

            <p>{course.fullDescription}</p>
            <h4>Modules:</h4>
            <ul>
                {course.modules.map((module, i) => (
                    <li key={i}>{module}</li>
                ))}
            </ul>
            <button className="enroll-button">Enroll Now</button>
            <button onClick={() => navigate('/')} className='back-button'>
                ← Back to Courses
            </button>

        </div>
    );
};

export default CourseDetail;
