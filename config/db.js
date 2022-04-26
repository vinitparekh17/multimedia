// mysql queries

// CREATE DATABASE multimedia
// CREATE TABLE songdata(id int AUTO_INCREMENT, songName VARCHAR(250), filePath VARCHAR(280) ,coverPath VARCHAR(280), PRIMARY KEY(id))
// INSERT INTO multimedia values()

const mysql = require('mysql');

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'multimedia'
})

db.connect(e => {
    if (e) {
        throw e
    }
    console.log('Database connection successfull!');
})

module.exports = db;