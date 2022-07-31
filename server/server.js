const express = require("express");
const app = express();
const PORT_NUMBER = 3001;

app.get("/api", (req, res) => {
    res.json({ "users": ["userOne", "userTwo", "userThree"] });
});

app.listen(PORT_NUMBER, () => {
    console.log("Server started on port " + PORT_NUMBER);
})