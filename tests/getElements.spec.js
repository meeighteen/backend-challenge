import app from "./../src/http/app";
import request from "supertest";

describe("GET /api/elements", ()=> {
    test("it should result the first 10 elements", async () => {
        const body = {
            "offset": 0,
            "limit": 10
        }
        const response = await request(app).get("/api/elements").send(body);
        expect(JSON.parse(response.res.text).length).toBe(10);
    })
});