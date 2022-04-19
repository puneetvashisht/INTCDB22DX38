import React, { useState } from "react";
import "./AddEmployee.css";

export default function AddEmployee() {
  const [name, setName] = useState("");
  const [salary, setSalary] = useState();
  const [inValid, setInValid] = useState(false);

  const addEmployee = () => {
    fetch("http://localhost:8000/employees", {
      method: "POST",
      body: JSON.stringify({ name, salary }),
      headers: {
        "content-type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((res) => console.log(res));
  };

  const handleNameChange = (e) => {
    let nameValue = e.target.value;
    if (nameValue.length <= 3) {
      console.log("invalid");
      setInValid(true);
    } else {
      console.log("valid");
      setInValid(false);
    }
    setName(e.target.value);
  };

  return (
    <div>
      <div className="form-floating mb-3">
        <input
          type="text"
          className={inValid ? "form-control invalid" : "form-control valid"}
          id="floatingInput"
          placeholder="name"
          value={name}
          onChange={handleNameChange}
        />
        <label htmlFor="floatingInput">Name</label>
      </div>
      <div className="form-floating">
        <input
          type="number"
          className="form-control"
          id="floatingPassword"
          placeholder="salary"
          value={salary}
          onChange={(e) => setSalary(e.target.value)}
        />
        <label htmlFor="floatingPassword">Salary</label>
      </div>
      <button className="btn btn-primary" onClick={addEmployee}>
        Add Employee
      </button>
    </div>
  );
}
