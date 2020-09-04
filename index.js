const express = require("express");
const dotenv = require("dotenv");
const app = express();

dotenv.config({path:".config/config.env"});


const port = process.env.PORT || 3000;

app.get("/", (req, res) => {
    res.send("Hello World 😼");
});

app.listen(port, ()=>{
    console.log(`App listening at http://localhost:${port}`);
});