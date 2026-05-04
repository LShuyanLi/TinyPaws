let students = [
    { name : "Anastasia", grade : 94 },
    { name : "Victoria", grade : 88 },
    { name : "Pentington", grade : 91 },
]

//

const classList = document.getElementById("classList");
const topStudentDisplay = document.getElementById("topStudentDisplay");
const randomStudentDisplay = document.getElementById("randomStudentDisplay");

const nameInput = document.getElementById("nameInput");
const gradeInput = document.getElementById("gradeInput");

const submitButton = document.getElementById("submitButton");
const randomButton = document.getElementById("randomButton");


function addStudent(event) {
  event.preventDefault();
  const studentName = nameInput.value.trim();
  const gradeNumber = parseInt(gradeInput.value.trim());

  students.push({
    name: studentName,
    grade: gradeNumber,
  });

  nameInput.value = "";
  gradeInput.value = "";

  displayTopStudent();
  displayClassList(students);
}

//

function displayClassList(students) {
  classList.innerHTML = "";
  students.forEach((student) => {
    const li = document.createElement("li");
    li.textContent = `${student.name} — Grade: ${student.grade}`;
    classList.appendChild(li);
  });
}

//

function displayTopStudent() {
  const sortedStudents = [...students].sort((a, b) => b.grade - a.grade);
  let topStudent = sortedStudents[0];
  topStudentDisplay.innerHTML = `Top Student: ${topStudent.name}; grade: ${topStudent.grade}`;
}

//

function pickStudentRandomizer() {
  const i = Math.floor(Math.random() * students.length);
  const randomizedStudent = students[i];

  randomStudentDisplay.textContent = `${randomizedStudent.name} — ${randomizedStudent.grade}`;
}

//

submitButton.addEventListener("click", addStudent);
randomButton.addEventListener("click", pickStudentRandomizer);

displayClassList(students);
displayTopStudent(students);
