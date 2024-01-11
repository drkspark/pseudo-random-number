const express = require("express");
const Api = express.Router();



Api.get("/ping", (req, res) => {
    res.send("pong");
})

Api.get("/number", async (req, res) => {
    try {
        const result = someRes;
        res.send(result);
    } catch(err) {
        console.log(err);
        res.send(err);
    }
})

module.exports = Api;