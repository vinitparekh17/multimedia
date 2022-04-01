const {Router} = require('express');
const router = Router();

router.get("/anime", (req, res) => {
    res.sendFile(__dirname + "/components/anime.html")
})

router.post("/anime", (req, res) => {
    const option = req.body.quary;
    const { get } = require("https");
    let data;
    var optValue = null;
    if (option == "1") {
        optValue = "neko";
    } else if (option == "2") {
        optValue = "hug";
    } else if (option == "3") {
        optValue = "pat";
    } else if (option == "4") {
        optValue = "waifu";
    } else if (option == "5") {
        optValue = "cry";
    } else if (option == "6") {
        optValue = "kiss";
    } else if (option == "7") {
        optValue = "slap";
    } else if (option == "8") {
        optValue = "smug";
    } else if (option == "9") {
        optValue = "punch";
    } else {
        console.log("something went wrong!")
    }
    var url = `https://neko-love.xyz/api/v1/${optValue}`;
    get(url, (response) => {
        const { statusCode } = res;
        if (statusCode != 200) {
            response.resume;
        }
        response.setEncoding("utf8");
        let rawData = '';
        response.on("data", (chunk) => {
            rawData += chunk;
        });
        response.on("end", () => {
            try {
                const parsedData = JSON.parse(rawData);
                res.render('anime', {
                    imageUrl: parsedData.url
                })
            } catch (e) {
                console.log(e);
            }
        })
    })
})

module.exports = router;