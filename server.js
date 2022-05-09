const express = require("express");
const ejs = require("ejs");
const app = express();
const cookieParser = require("cookie-parser"); const swaggerUi = require('swagger-ui-express');
const Yaml = require('yamljs');
const swaggerDocument = Yaml.load('./swagger.yaml');
const fileupload = require('express-fileupload');
const PORT = process.env.PORT || 3001
require('dotenv').config()
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));
app.use(cookieParser());
app.set("view engine", "ejs");
app.set("views", __dirname + '/routes/views')

//routes
app.use(require('./routes/login'))
app.use(require('./routes/home'))
app.use(require('./routes/feature'))
app.use(require('./routes/pricing'))
app.use(require('./routes/movies'))
app.use(require('./routes/anime'))
app.use(require('./routes/playstore'))
app.use(require('./routes/weather'))
app.use(require('./routes/music'))
app.use(require('./routes/adminpanel'))
app.use(require('./routes/admin'))


// Init server on port 
app.listen(8000, () => console.log("http:localhost:8000"));