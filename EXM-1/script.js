function addBtn() {
  let Id = document.getElementById("studentId").value;
  let Name = document.getElementById("studentName").value;
  let Course = document.getElementById("studentCourse").value;

  if (Id == "") {
    alert("Please Provide Student Id");
    return;
  }

  if (Name == "") {
    alert("Please Provide Student Name");
    return;
  }

  if (Course == "") {
    alert("Please Enter the Course Name");
    return;
  }

  if (localStorage.getItem(Id)!= null) {
    alert("Student ID already exists");
    return;
  }

  let student = {
    id: Id,
    name: Name,
    course: Course,
  };

  localStorage.setItem(Id, JSON.stringify(student));

  let tr = document.createElement("tr");

  let td1 = document.createElement("td");
  td1.innerHTML = Id;

  let td2 = document.createElement("td");
  td2.innerHTML = Name;

  let td3 = document.createElement("td");
  td3.innerHTML = Course;

  let td4 = document.createElement("td");
  let deleteButton = document.createElement("button");
  deleteButton.innerHTML = "Delete";
  deleteButton.className = "btn btn-danger";
  deleteButton.onclick = function () {
    deleteStudent(tr, Id);
  };
  td4.appendChild(deleteButton);

  tr.appendChild(td1);
  tr.appendChild(td2);
  tr.appendChild(td3);
  tr.appendChild(td4);

  document.getElementById("studentTable").appendChild(tr);
  alert("Student details added successfully");

  document.getElementById("studentId").value = "";
  document.getElementById("studentName").value = "";
  document.getElementById("studentCourse").value = "";
}
function deleteStudent(row, Id) {
  localStorage.removeItem(Id);
  row.remove();
  alert("Student details deleted successfully");
}
