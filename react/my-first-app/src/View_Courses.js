import React, { useState } from "react";
import Card from "./Card";

export default function View_Courses() {
  const [courses, setCourses] = useState([]);

  const fetchCourses = () => {
    fetch("http://localhost:8000/courses")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setCourses(data);
      });
  };

  let courseList = courses.map((course, i) => {
    console.log(course);
    return (
      <Card
        key={i}
        title={course.title}
        summary={course.summary}
        id={course.id}
      />
    );
  });

  console.log(courseList);

  return (
    <>
      <button className="btn btn-primary" onClick={fetchCourses}>
        Get Courses
      </button>

      <div className="row">{courseList}</div>
    </>
  );
}
