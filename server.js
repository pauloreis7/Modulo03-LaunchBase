const express = require('express')
const nunjucks = require('nunjucks')

const server = express()
const videos = require('./data')

server.use(express.static('public'))

server.set("view engine", "njk")

nunjucks.configure("views", {
    express:server,
    autoescape:false,
    noChace:true
})

server.get("/", function (req, res) {
    const about = {
        avatar_url: "foto_user.png",
        name: "Paulo Reis",
        rule: "Aluno - Rocketseat",
        description: 'Amante da programação e apaixonado pelas melhores tecnologias do mercado. Focado em se tornar um desenvovedor sênior full-stack com JavaScript e as tecnologias omnistack. Aluno da <a href="http://Rocketseat.com.br" target="_blank" >Rocketseat</a>'
    }

    return res.render("about", {about})
})

server.get("/portifolio", function (req, res) {
    return res.render("portifolio", {itens:videos})
})

server.get("/video", function (req, res) {
    const id = req.query.id

    const video = videos.find(function (video) {

       return video.id == id
    })

    if (!video) {
        return res.send("Sorry, video not found :( ")
    }

    return res.render("video", { item:video })
    
})

server.listen(5000, function () {
    console.log("Rodouuuu!!!!!")
})