import logo from "./logo.svg";
import "./App.css";
import Message from "./Message";
import Badge from "./Badge";
import View_Courses from "./View_Courses";
import Card from "./Card";
import AddCourses from "./AddCourses";

function App() {
  return (
    <div className="container">
      <div className="mb-5">
        <AddCourses />
      </div>
      <View_Courses />

      {/* <Message></Message>
      <Badge caption="Inbox"></Badge>
      <Badge caption="Sent"></Badge> */}
    </div>
  );
}

export default App;
