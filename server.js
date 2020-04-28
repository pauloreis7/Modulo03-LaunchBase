const express = require('express')
const server = express()

server.get("/", function (req, res) {
    return res.send("Helo, World!")
})

server.listen(5000, function () {
    console.log("Rodouuuu!!!!!")
})