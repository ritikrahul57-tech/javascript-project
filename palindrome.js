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