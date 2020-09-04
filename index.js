const express = require("express");
const dotenv = require("dotenv");
const morgan = require("morgan");

const app = express();

dotenv.config({path:"./config/config.env"});

const port = process.env.PORT;

if(process.env.NODE_ENV==="development"){
    app.use(morgan("tiny"));
}

app.get("/", (req, res) => {
    res.send("Hello World 😼");
});

app.listen(port, ()=>{
    console.log(`App listening at http://localhost:${port}`);
});