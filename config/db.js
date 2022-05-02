// mysql queries
// INSERT INTO multimedia values()

const mysql = require('mysql');

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'multimedia'
})

// db.query(
//     "CREATE DATABASE multimedia"
//     , (err) => {
//         if (err) throw err;
//     })

// db.query(
//     "CREATE TABLE songdata(id int AUTO_INCREMENT, songName VARCHAR(250), filePath VARCHAR(280) ,coverPath VARCHAR(280), PRIMARY KEY(id))"
//     , (err) => {
//         if (err) throw err;
//     })

// db.query(
//     "CREATE DATABASE multimedia"
//     , (err) => {
//         if (err) throw err;
//     })

db.connect(e => {
    if (e) {
        throw e
    }
    console.log('Database connection successfull!');
})
module.exports = db;