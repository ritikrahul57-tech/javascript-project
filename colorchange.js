const body = document.getElementsByTagName("body") 


let students = JSON.parse(localStorage.getItem("students")) || [];

let isSorted = false;

// Add Student
function addStudent() {

    let name = document.getElementById("studentName").value;
    let age = Number(document.getElementById("studentAge").value);
    let course = document.getElementById("studentCourse").value;
    let marks = Number(document.getElementById("studentMarks").value);

    if (name.trim() === "" || course.trim() === "" ||
        age <= 0 || marks < 0 || marks > 100) {

        alert("Please enter valid student details!");
        return;
    }

    let student = {
        id: Date.now(),
        name: name,
        age: age,
        course: course,
        marks: marks
    };

    students.push(student);

    saveData();

    displayStudents();

    clearInputs();

    alert("Student added successfully!");
}


// Display Students
function displayStudents() {

    let studentList = document.getElementById("studentList");

    let searchValue = document
        .getElementById("searchInput")
        .value.toLowerCase();

    studentList.innerHTML = "";

    let filteredStudents = students.filter(function(student) {

        return student.name.toLowerCase().includes(searchValue);

    });

    if (filteredStudents.length === 0) {

        studentList.innerHTML = "<p>No students found!</p>";
        updateStatistics();
        return;
    }

    filteredStudents.forEach(function(student) {

        let status = student.marks >= 40 ? "Pass" : "Fail";

        let card = document.createElement("div");

        card.className = "student-card";

        card.innerHTML = `
            <h3>${student.name}</h3>

            <p>Age: ${student.age}</p>

            <p>Course: ${student.course}</p>

            <p>Marks: ${student.marks}</p>

            <p>Status: ${status}</p>

            <button class="edit-btn"
                onclick="editStudent(${student.id})">
                Edit
            </button>

            <button class="delete-btn"
                onclick="deleteStudent(${student.id})">
                Delete
            </button>
        `;

        studentList.appendChild(card);

    });

    updateStatistics();
}


// Delete Student
function deleteStudent(id) {

    let confirmation = confirm("Are you sure you want to delete?");

    if (confirmation) {

        students = students.filter(function(student) {

            return student.id !== id;

        });

        saveData();

        displayStudents();

    }
}


// Edit Student
function editStudent(id) {

    let student = students.find(function(student) {

        return student.id === id;

    });

    if (student) {

        let newName = prompt("Enter new name:", student.name);

        if (newName === null || newName.trim() === "") {
            return;
        }

        let newAge = Number(prompt("Enter new age:", student.age));

        let newCourse = prompt("Enter new course:", student.course);

        let newMarks = Number(prompt("Enter new marks:", student.marks));

        if (
            !Number.isInteger(newAge) || newAge <= 0 ||
            newCourse === null || newCourse.trim() === "" ||
            !Number.isFinite(newMarks) || newMarks < 0 || newMarks > 100
        ) {
            alert("Invalid student details!");
            return;
        }

        student.name = newName.trim();
        student.age = newAge;
        student.course = newCourse.trim();
        student.marks = newMarks;

        saveData();

        displayStudents();

        alert("Student updated successfully!");

    }
}


// Sort Students
function sortStudents() {

    isSorted = !isSorted;

    students.sort(function(a, b) {

        return isSorted
            ? b.marks - a.marks
            : a.marks - b.marks;

    });

    displayStudents();

}


// Calculate Statistics
function updateStatistics() {

    let total = students.length;

    let totalMarks = students.reduce(function(sum, student) {

        return sum + student.marks;

    }, 0);