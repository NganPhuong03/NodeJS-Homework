const student = require("./student");

const students = [
    {
        name: "Nguyen Van An",
        scores: [8, 7, 9]
    },
    {
        name: "Tran Thi Binh",
        scores: [7, 6, 8]
    },
    {
        name: "Le Van Cuong",
        scores: [5, 4, 6]
    }
];

students.forEach(student.printReport);