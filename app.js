const express = require('express')
const path = require('path')
const basePath = path.join(__dirname, 'templates')
const exphbs = require('express-handlebars')
const app = express()
const port = 3000

app.use(express.static('public'))

  app.use(express.urlencoded({extended:true}))

    app.use(express.json())
    

const checkAuth = function(req, res, next){
    req.authStatus = true   

    if(req.authStatus){
        console.log("Você está logado, pode continuar!")
        next()
    } else {
        console.log("Não está logado!")
        next()
    }

}

    app.use(checkAuth)

  




    app.get("/", function(req, res){
        res.sendFile(basePath + '/index.html')
    })

    app.get("/portifolio/", function(req, res){
        res.sendFile(basePath + '/portifolio.html')
    })

    app.get("/pre-weeding/", function(req, res){
        res.sendFile(basePath + '/pre-weeding.html')
    })

    app.get("/agendamento/", function(req, res){
        res.sendFile(basePath + '/agendamento.html')
    })

    app.get("/curso/", function(req, res){
        res.sendFile(basePath + '/curso.html')
    })

    app.listen(port, function(erro){
        if(erro){
            console.log('Erro!')
        } else{
            console.log('Servidor iniciado')
        }
    })