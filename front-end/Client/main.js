let coursesElement = document.getElementById("courses");

fetch("http://localhost:8000/courses")
  .then((res) => res.json())
  .then((arr) => {
    arr.map((course) => {
      let courseEle = document.createElement("div");
      courseEle.innerHTML = `<div><img src="https://via.placeholder.com/150"/><h3>${course.title}</h3><p>${course.summary}</p><button onClick="updateCourse(${course.id})">Update</button><button onClick="deleteCourse(${course.id})">Delete</button></div>`;
      coursesElement.append(courseEle);
    });
  });

function updateCourse(id) {
  fetch("http://localhost:8000/courses/" + id, {
    method: "PATCH",
    body: JSON.stringify({
      title: "NodeJs",
      summary: "Run time enviroment",
    }),
    headers: {
      "Content-type": "application/json",
    },
  });
}

function deleteCourse(id) {
  fetch("http://localhost:8000/courses/" + id, {
    method: "DELETE",
    headers: {
      "Content-type": "application/json",
    },
  });
}

function addCourse() {
  let Title = document.getElementById("title").value;
  let Summary = document.getElementById("summary").value;
  console.log("title:", Title);
  console.log("summary:", Summary);

  fetch("http://localhost:8000/courses", {
    method: "POST",
    body: JSON.stringify({
      title: Title,
      summary: Summary,
    }),
    headers: {
      "Content-type": "application/json",
    },
  });
}
