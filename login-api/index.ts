import { json } from "body-parser";
import express from "express";

const app = express();

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
    res.end();
});

app.listen(3000, () => console.log("Server listening on port 3000"));