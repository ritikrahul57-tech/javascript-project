
let students = [
    { name: "Ritik", marks: 85 },
    { name: "Divakar", marks: 72 },
    { name: "Arun", marks: 45 },
    { name: "Kumar", marks: 92 },
    { name: "Rahul", marks: 30 }
];

function calculateGrade(marks) {
    if (marks >= 90) {
        return "A+";
    }
    else if (marks >= 80) {
        return "A";
    }
    else if (marks >= 70) {
        return "B";
    }
    else if (marks >= 50) {
        return "C";
    }
    else {
        return "Fail";
    }
}

function displayResults() {
    let total = 0;

    console.log("===== STUDENT RESULTS =====");

    for (let i = 0; i < students.length; i++) {

        let grade = calculateGrade(students[i].marks);

        console.log("Name: " + students[i].name);
        console.log("Marks: " + students[i].marks);
        console.log("Grade: " + grade);

        console.log("----------------------");

        total += students[i].marks;
    }

    let average = total / students.length;

    console.log("Total Marks: " + total);
    console.log("Average Marks: " + average);
}

displayResults();
