let name = "Ritik";
let mark = 85;

function calculateGrade() {
    console.log("Student Name: " + name);
    console.log("Total Mark: " + mark);

    if (mark >= 90) {
        console.log("Grade: A");
    }
    else if (mark >= 80) {
        console.log("Grade: B");
    }
    else if (mark >= 70) {
        console.log("Grade: C");
    }
    else if (mark >= 50) {
        console.log("Grade: D");
    }
    else {
        console.log("Result: Fail");
    }
}

calculateGrade();