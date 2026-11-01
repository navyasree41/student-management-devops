
const request = require("supertest");
const app = require("../src/app");

describe("Student Management API", () => {

    test("GET /students should return all students", async () => {
        const response = await request(app)
            .get("/students");

        expect(response.statusCode).toBe(200);
        expect(response.body.length).toBeGreaterThan(0);
    });

    test("POST /students should add a student", async () => {
        const response = await request(app)
            .post("/students")
            .send({
                name: "Rahul",
                rollNo: "371306",
                department: "CSE",
                email: "rahul@example.com"
            });

        expect(response.statusCode).toBe(201);
        expect(response.body.name).toBe("Rahul");
    });

    test("GET invalid student should return 404", async () => {
        const response = await request(app)
            .get("/students/9999");

        expect(response.statusCode).toBe(404);
    });

    test("POST without required fields should return 400", async () => {
        const response = await request(app)
            .post("/students")
            .send({
                name: "Test"
            });

        expect(response.statusCode).toBe(400);
    });

});
