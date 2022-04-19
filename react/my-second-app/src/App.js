import logo from "./logo.svg";
import "./App.css";
import ViewEmployees from "./ViewEmployees";
import AddEmployee from "./AddEmployee";
import { Route, Routes } from "react-router-dom";
import Navbar from "./Navbar";

function App() {
  return (
    <>
      <Navbar />
      <div>
        <Routes>
          <Route path="/" element={<ViewEmployees />} />
          <Route path="add" element={<AddEmployee />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
