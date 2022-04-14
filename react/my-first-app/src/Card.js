import React from "react";
import { Link } from "react-router-dom";

export default function Card(props) {
  const deleteCourse = (id) => {
    fetch("http://localhost:8000/courses/" + id, {
      method: "DELETE",
    })
      .then((res) => {
        res.json();
      })
      .then((res) => {
        console.log(res);
      });
  };

  return (
    <div>
      <div className="card" style={{ width: "18rem" }}>
        <img
          src="https://via.placeholder.com/150"
          className="card-img-top"
          alt="..."
        />
        <div className="card-body">
          <h5 className="card-title">{props.title}</h5>
          <p className="card-text">{props.summary}</p>

          <Link
            to={"update" + "/" + props.id + "/" + props.title}
            className="btn btn-primary"
          >
            Edit
          </Link>

          <button
            className="btn btn-danger"
            onClick={() => deleteCourse(props.id)}
          >
            {" "}
            X{" "}
          </button>
        </div>
      </div>
    </div>
  );
}
