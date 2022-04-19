import React, { useEffect, useState } from "react";

export default function ViewEmployees() {
  const [employees, setEmployees] = useState([]);
  useEffect(() => {
    fetch("http://localhost:8000/employees")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setEmployees(data);
      });
  }, []);

  const deleteEmployee = (id) => {
    fetch("http://localhost:8000/employees/" + id, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((res) => console.log(res));

    let newEmployees = employees.filter((e) => e.id !== id);
    setEmployees(newEmployees);
  };

  let employeeList = employees.map((employee, i) => {
    return (
      <div key={i} className="card" style={{ width: "18rem" }}>
        <img
          src="https://via.placeholder.com/150"
          className="card-img-top"
          alt="..."
        />
        <div className="card-body">
          <h5 className="card-title">{employee.name}</h5>
          <p className="card-text">Salary:{employee.salary}</p>
          <a href="#" className="btn btn-primary">
            Go somewhere
          </a>
          <button
            className="btn btn-danger"
            onClick={() => deleteEmployee(employee.id)}
          >
            {" "}
            X{" "}
          </button>
        </div>
      </div>
    );
  });

  return <div className="container row">{employeeList}</div>;
}
