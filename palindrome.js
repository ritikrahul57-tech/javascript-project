
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
