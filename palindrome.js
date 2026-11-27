let students = ["Ritik", "Rahul", "Divakar", "Arun"];
let marks = [85, 92, 67, 45];

function checkResult(mark) {
    if (mark >= 90) {
        return "Excellent";
    }
    else if (mark >= 75) {
        return "Very Good";
    }
    else if (mark >= 50) {
        return "Pass";
    }
    else {
        return "Fail";
    }
}

console.log("===== STUDENT REPORT =====");

for (let i = 0; i < students.length; i++) {
    console.log("Name: " + students[i]);
    console.log("Marks: " + marks[i]);
    console.log("Result: " + checkResult(marks[i]));
    console.log("----------------------");
}

let total = 0;

for (let mark of marks) {
    total += mark;
}

let average = total / marks.length;

console.log("Total Marks: " + total);
console.log("Average Marks: " + average);