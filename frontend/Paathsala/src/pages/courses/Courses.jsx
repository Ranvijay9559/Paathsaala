import React, { useState } from 'react';
import './courses.css';
import { CourseData } from '../../context/CourseContext';
import CourseCard from '../../components/coursecard/CourseCard';

const Courses = () => {
  const { courses } = CourseData();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', ...new Set(courses?.map((c) => c.category).filter(Boolean))];

  const filteredCourses = Array.isArray(courses)
    ? courses.filter((course) => {
        const name = course?.name?.toLowerCase() || '';
        const category = course?.category?.toLowerCase() || '';
        const lowerSearch = searchTerm.toLowerCase();

        const matchesSearch =
          name.includes(lowerSearch) || category.includes(lowerSearch);
        const matchesCategory =
          selectedCategory === 'All' || course.category === selectedCategory;

        return matchesSearch && matchesCategory;
      })
    : [];

  return (
    <div className="courses">
      <h2>Available Courses</h2>
      <div className='filter-bar'>
        <input
          type="text"
          placeholder="Search by name or category..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="search-input"
        />

        <select
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
          className="category-select"
        >
          {categories.map((cat, idx) => (
            <option key={idx} value={cat}>
              {cat}
            </option>
          ))}
        </select>
      </div>
      

      <div className="course-container">
        {filteredCourses.length > 0 ? (
          filteredCourses.map((course) => (
            <CourseCard key={course._id} course={course} />
          ))
        ) : (
          <p>No Courses Found!</p>
        )}
      </div>
    </div>
  );
};

export default Courses;
