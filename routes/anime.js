const {Router} = require('express');
const router = Router();

router.get("/anime", (req, res) => {
    res.sendFile(__dirname + "/components/anime.html")
})

router.post("/anime", (req, res) => {
    const option = req.body.quary;
    const { get } = require("https");
    let data;
    var url = `https://neko-love.xyz/api/v1/${option}`;
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