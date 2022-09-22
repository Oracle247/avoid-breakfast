const express = require("express");
const expressLayouts = require("express-ejs-layouts");
const session = require("express-session");
const cors = require("cors");
const bodyParser = require("body-parser");
const app = express();

// EJS
app.use(expressLayouts);
app.set("view engine", "ejs");

// Express body parser
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));

//To handle cors errors
app.use(cors());

// For Static files
app.use(express.static("public"));

// Routes
app.use("/", require("./routes/index.js"));

const PORT = process.env.PORT || 2020;

app.listen(PORT, console.log(`Server started on port ${PORT}`));
