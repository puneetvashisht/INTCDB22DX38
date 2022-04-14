import logo from "./logo.svg";
import "./App.css";
import Message from "./Message";
import Badge from "./Badge";
import View_Courses from "./View_Courses";
import Card from "./Card";
import AddCourses from "./AddCourses";

import { Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";
import UpdateCourse from "./UpdateCourse";

function App() {
  return (
    <>
      <section>
        <Navbar />
      </section>
      <div className="container">
        <Routes>
          <Route path="/" element={<View_Courses />} />
          <Route path="add" element={<AddCourses />} />
          <Route path="update/:id/:title" element={<UpdateCourse />} />
          <Route path="about" element={<AboutUs />} />
        </Routes>

        {/* <div className="mb-5">
        <AddCourses />
      </div>
      <View_Courses /> */}

        {/* <Message></Message>
      <Badge caption="Inbox"></Badge>
      <Badge caption="Sent"></Badge> */}
      </div>
    </>
  );
}

export default App;

function AboutUs() {
  return <h2>About Us Page</h2>;
}
