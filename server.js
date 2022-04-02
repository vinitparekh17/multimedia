const express = require("express");
const ejs = require("ejs");
const app = express();
// const Form = require("./models/form")

app.use(express.urlencoded({ extended: false }));
app.use(express.static("public"));
app.set("view engine", "ejs");
app.set("views", __dirname + '/routes/views')

//routes
app.use(require('./routes/home'))
app.use(require('./routes/movies'))
app.use(require('./routes/anime'))
app.use(require('./routes/playstore'))
app.use(require('./routes/weather'))


// Init server on port 
app.listen(8000, () => console.log("http:localhost:8000"));