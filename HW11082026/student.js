function getAverage(scores) {
    const total = scores.reduce((sum, score) => sum + score, 0);
    return total / scores.length;
}

function getRank(average) {
    if (average >= 8) {
        return "Excellent";
    } else if (average >= 6.5) {
        return "Good";
    } else if (average >= 5) {
        return "Average";
    } else {
        return "Poor";
    }
}

function printReport(student) {
    const average = getAverage(student.scores);
    const rank = getRank(average);

    console.log("Student:", student.name);
    console.log("Scores:", student.scores.join(", "));
    console.log("Average:", average.toFixed(2));
    console.log("Rank:", rank);
    console.log("--------------------");
}

module.exports = {
    getAverage,
    getRank,
    printReport
};