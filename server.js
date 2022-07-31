const express = require('express');
const app = express();

const PORT_NUMBER = 3001;

app.get("/", function(req, res) {
    res.sendFile(__dirname + "/routes/usersRoute.js");
});

app.listen("3001", () => {
    console.log("Server running on port 3001");
})