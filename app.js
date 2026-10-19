const express = require('express')
const exphbs = require('express-handlebars')
const app = express()
const port = 3000
const authRoutes = require('./routes/auth')
const session = require('express-session');



app.use(session({
    secret: 'TESTE', //Essa é a chave usada para assinar o cookie que identifica a sessão.
    resave:false, // Evita salavar novamente se os dados do usuários forem atualizados
    saveUninitialized: false, // Quando ainda n possui uma sessão inicializada evita salvar a sessão vazia
    cookie:{ // abre as configurações do cookie do navegador
        httpOnly:true, // impede o JS ler o cookie
        maxAge: 60*60*1000 // tempo do cookie
    }
}))

app.use((req,res,next)=>{

    res.locals.logado = Boolean(req.session.id_cliente);
    next();
})


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