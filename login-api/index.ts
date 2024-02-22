import { json } from "body-parser";
import express, { Request } from "express";
import cors from "cors";

// 1. npm i jsonwebtoken
// 2. write a middleware to validate tokens
// 3. look for a package to validate jwt as an express middleware

const app = express();

if (process.env.NODE_ENV === "local") {
    app.use(cors());
}

app.use(json());

app.post("/login", (req, res) => {
    const { username, password } = req.body;

    if (username !== "admin" || password !== "Aa123456") {
        res.status(401);
        res.send({
            error: "Username or password doesn't match."
        });

        return;
    }

    res.status(200);
    res.send(JSON.stringify("some secret value")); // Send a valid JWT
});

app.get("/profile", (req, res) => {
    if (!isTokenValid(req)) {
        res.status(401);
        res.end();
        return;
    }

    res.status(200);
    res.send({
        username: "admin",
        role: "Administrator"
    });
});

function isTokenValid(req: Request) {
    return true; // Validate the token on the request
}

app.listen(3000, () => console.log("Server listening on port 3000"));