import React, { useState } from "react";

export default function AddCourses() {
  const [title, setTitle] = useState("");
  const [summary, setSummary] = useState("");

  const addCourse = () => {
    fetch("http://localhost:8000/courses", {
      method: "POST",
      body: JSON.stringify({ title, summary }),
      headers: {
        "content-type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((res) => console.log(res));
  };

  return (
    <>
      <div className="form-floating mb-3">
        <input
          type="text"
          className="form-control"
          id="floatingInput"
          placeholder="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <label htmlFor="floatingInput">Enter Title</label>
      </div>
      <div className="form-floating">
        <input
          type="text"
          className="form-control"
          id="floatingPassword"
          placeholder="summary"
          value={summary}
          onChange={(e) => setSummary(e.target.value)}
        />
        <label htmlFor="floatingPassword">Enter Summary</label>
      </div>
      <button className="btn btn-primary" onClick={addCourse}>
        Add Course
      </button>
    </>
  );
}
