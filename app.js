const express = require('express')
const exphbs = require('express-handlebars')
const app = express()
const port = 3000
const authRoutes = require('./routes/auth')


app.use(express.static('public'))

const hbs = exphbs.create({
    partialsDir: ['views/partials']
})


app.engine('handlebars', hbs.engine)
app.set('view engine', 'handlebars')

app.use(
    express.urlencoded({
        extended:true
    })
)

app.use(express.json())

app.use('/', authRoutes)


    app.listen(port, function(erro){
        if(erro){
            console.log('Erro!')
        } else{
            console.log('Servidor iniciado')
        }
    })