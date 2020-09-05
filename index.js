const express = require("express");
const dotenv = require("dotenv");
const morgan = require("morgan");

const app = express();

//Route file
const territories = require('./routes/territories');

//Load Env variables
dotenv.config({path:"./config/config.env"});

const port = process.env.PORT;

if(process.env.NODE_ENV==="development"){
    app.use(morgan("tiny"));
}

//Mount Routes
app.use('/api/v1/territories', territories);

app.get("/", (req, res) => {
    res.send("Hello World 😼");
});

app.listen(port, ()=>{
    console.log(`App listening at http://localhost:${port}`);
});