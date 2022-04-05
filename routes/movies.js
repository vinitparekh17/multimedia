const https = require('https');
const { Router } = require('express');
const checkAuth = require('../checkAuth');
const router = Router();
const key = `b31cf485`;

router.get("/movies", checkAuth , (req, res) => {
    // res.sendFile(__dirname + "/components/movies.html")
    var user = req.user
    res.render('movies', { Title: null, user});
})

router.post("/movies", checkAuth, (req, res) => {
    var user = req.user
    var input = req.body.search;
    var url = `https://www.omdbapi.com/?t=${input}&apikey=${key}`;
    try {
        https.get(url, (response) => {
            let rawData = "";
            response.on("data", (data) => { rawData += data })
            response.on("end", () => {
                var { Title, Year, Rated, Released, Director, imdbRating, imdbVotes, Runtime, Genre, Writer, Actors, Plot, Language, Poster, Response } = JSON.parse(rawData)
                if (Response == "False") {
                    return res.sendFile(__dirname + "/error.html")
                }

                res.render("movies", {
                    Title: Title,
                    Year: Year,
                    Rated: Rated,
                    Released: Released,
                    Director: Director,
                    imdbRating: imdbRating,
                    imdbVotes: imdbVotes,
                    Runtime: Runtime,
                    Genre: Genre,
                    Writer: Writer,
                    Actors: Actors,
                    Plot: Plot,
                    Poster: Poster,
                    user
                })
            })
        })
    } catch (e) {
        return console.log(e);
    }
})

module.exports = router;