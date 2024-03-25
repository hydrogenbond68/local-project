function calculateGrade(marks) {
    if (marks > 79) {
        return "A";
    } else if (marks >= 60 && marks <= 79) {
        return "B";
    } else if (marks >= 49 && marks <= 59) {
        return "C";
    } else if (marks >= 40 && marks <= 49) {
        return "D";
    } else {
        return "E";
    }
}function main() {
    while (true) {
        let input =("Enter student marks (0-100):");
        let marks = parseFloat(input);
        if (!isNaN(marks) && marks >= 0 && marks <= 100) {
            let grade = calculateGrade(marks);
            console.log("Grade:", grade);
            break;
        } else {
            console.log("Marks should be between 0 and 100. Try again.");
        }
    }
}

main();