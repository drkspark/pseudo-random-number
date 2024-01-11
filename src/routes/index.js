const express = require("express");
const { getRandomNumber } = require("./numbers/numbers.service");
const Api = express.Router();



Api.get("/ping", (req, res) => {
    res.send("pong");
})

Api.get("/number", async (req, res) => {
    try {
        const result = await getRandomNumber();
        res.status(200).send({"number": result});
    } catch(err) {
        console.log(err);
        res.status(500).send(err);
    }
})

module.exports = Api;