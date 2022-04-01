const https = require('https');
const { Router } = require('express');
const router = Router();
const key = `b31cf485`;

router.get("/movies", (req, res) => {
    res.sendFile(__dirname + "/components/movies.html")
})

router.post("/movies", (req, res) => {
    var input = req.body.search;
    var url = `https://www.omdbapi.com/?t=${input}&apikey=${key}`;

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
            })
        })
    })
})

module.exports = router;