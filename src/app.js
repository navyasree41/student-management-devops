
const express = require("express");

const app = express();

app.use(express.json());

let students = [
    {
        id: 1,
        name: "Navya",
        rollNo: "371304",
        department: "CSE",
        email: "navya@example.com"
    },
    {
        id: 2,
        name: "Swetha",
        rollNo: "371305",
        department: "CSE",
        email: "swetha@example.com"
    }
];

app.get("/", (req, res) => {
    res.send("Student Management Application is Running");
});

app.get("/students", (req, res) => {
    res.json(students);
});

app.get("/students/:id", (req, res) => {
    const student = students.find(
        s => s.id === Number(req.params.id)
    );

    if (!student) {
        return res.status(404).json({
            message: "Student not found"
        });
    }

    res.json(student);
});

app.post("/students", (req, res) => {
    const { name, rollNo, department, email } = req.body;

    if (!name || !rollNo || !department || !email) {
        return res.status(400).json({
            message: "All fields are required"
        });
    }

    const student = {
        id: students.length
            ? Math.max(...students.map(s => s.id)) + 1
            : 1,
        name,
        rollNo,
        department,
        email
    };

    students.push(student);

    res.status(201).json(student);
});

app.put("/students/:id", (req, res) => {
    const student = students.find(
        s => s.id === Number(req.params.id)
    );

    if (!student) {
        return res.status(404).json({
            message: "Student not found"
        });
    }

    const { name, rollNo, department, email } = req.body;

    Object.assign(student, {
        name: name ?? student.name,
        rollNo: rollNo ?? student.rollNo,
        department: department ?? student.department,
        email: email ?? student.email
    });

    res.json(student);
});

app.delete("/students/:id", (req, res) => {
    const index = students.findIndex(
        s => s.id === Number(req.params.id)
    );

    if (index === -1) {
        return res.status(404).json({
            message: "Student not found"
        });
    }

    students.splice(index, 1);

    res.json({
        message: "Student deleted successfully"
    });
});

module.exports = app;
