require("dotenv").config();

const mongoose = require("mongoose");
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const cors = require("cors");

//Routes Imports
const todoRoutes = require("./routes/todo.js");

//Middlewares
app.use(bodyParser.json());
app.use(cookieParser());
app.use(cors());
app.use("/v1",todoRoutes);

//DB CONNECTION
mongoose
  .connect(process.env.DATABASE, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })
  .then(() => {
    console.log("DB CONNECTED");
  })
  .catch(err=>{
      console.log("ERROR",err);
  })
  


 
//PORTS
const port = process.env.PORT || 8000;

//SERVER LISTINING
app.listen(port, () => {
  console.log(`app is running at ${port}`);
});