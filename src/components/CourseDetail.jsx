import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import './styles.css';

const CourseDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [course, setCourse] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get(`http://localhost:5000/courses/${id}`)
      .then((res) => {
        setCourse(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error('Error fetching course:', err);
        setLoading(false);
      });
  }, [id]);

  if (loading) return <p>Loading...</p>;
  if (!course) return <p>Course not found</p>;

  return (
    <div className="course-detail">
      <h2>{course.title}</h2>
      <img
        src={course.image || '/assets/default.jpg'}
        alt={course.title}
        className="img-fluid"
      />
      <p>{course.fullDescription}</p>
            <h4>Modules:</h4>
            <ul>
                {course.modules.map((module, i) => (
                    <li key={i}>{module}</li>
                ))}
            </ul>
      <p><strong>Instructor:</strong> {course.instructor || 'N/A'}</p>
      <p><strong>Duration:</strong> {course.hours || 0} hours</p>
      <p><strong>Category:</strong> {course.category || 'Uncategorised'}</p>

      <div className="button-row">
        <button onClick={() => navigate(-1)} className="back-button btn btn-secondary">
          <span className="back-text-full">← Back to Courses</span>
          <span className="back-text-short">Back</span>
        </button>
        <button className="enrol-button btn btn-primary">Enrol</button>
      </div>
    </div>
  );
};

export default CourseDetail;
