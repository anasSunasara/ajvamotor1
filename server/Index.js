const express = require("express");
const mysql = require("mysql");
const cors = require("cors");
const bodyparser = require("body-parser");

const multer = require("multer");


const app = express();
app.use(express.json());
app.use(cors());
app.use(bodyparser.json());

const port = 5000;


const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "ajvamotor",
});


const category = require("./Routes/Category");
app.use("/", category )


const slider = require("./Routes/Slider")
app.use ('/',slider)


const product = require("./Routes/Product")
app.use ('/',product)


const product2 = require("./Routes/Product2")
app.use ('/',product2)




app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
