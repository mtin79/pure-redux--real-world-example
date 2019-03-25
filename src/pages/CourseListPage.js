import React, { useState } from "react";
import { connect } from "react-redux";

import { createCourse } from "../actions";

const CourseListPage = ({ courses, createCourse }) => {
  const [courseName, setCourseName] = useState("");

  const handleSubmit = event => {
    console.log("handle submit");
    event.preventDefault();
    createCourse({ name: courseName });
  };

  return courses.length === 0 ? (
    <div>
      <h2>Create your first course, here.</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Enter course name:
          <input
            name="courseName"
            value={courseName}
            onChange={event => setCourseName(event.target.value)}
          />
        </label>
        <button type="submit">Create new course</button>
      </form>
    </div>
  ) : (
    <div>
      <ul>
        {courses.map(course => (
          <li key={course.id}>{course.name}</li>
        ))}
      </ul>
    </div>
  );
};

const mapStateToProps = ({ courses }) => ({ courses });

const mapDispatchToProps = (dispatch, ownProps) => ({
  createCourse: course => dispatch(createCourse(course))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CourseListPage);
