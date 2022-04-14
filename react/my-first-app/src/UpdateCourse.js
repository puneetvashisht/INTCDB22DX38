import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

export default function UpdateCourse() {
  const params = useParams();
  const navigate = useNavigate();

  const [title, setTitle] = useState(params.title);
  const [summary, setSummary] = useState("");

  const updateCourse = () => {
    console.log(params.id);
    fetch("http://localhost:8000/courses/" + params.id, {
      method: "PATCH",
      body: JSON.stringify({ summary }),
      headers: {
        "content-type": "application/json",
      },
    }).then((res) => {
      if (res.status >= 400) {
        console.log("Course Updation Failed");
      } else {
        navigate("/");
      }
    });
  };

  return (
    <>
      <div className="form-floating mb-3">
        <input
          type="text"
          className="form-control"
          id="floatingInput"
          placeholder="title"
          disabled
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
      <button className="btn btn-primary" onClick={updateCourse}>
        Update Course
      </button>
    </>
  );
}
