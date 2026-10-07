const express = require('express')
const path = require('path')
const exphbs = require('express-handlebars')
const mySql = require('mysql2');
const app = express()
const porta = 3000

const hbs = exphbs.create({

    extname:'.html',
    defaultLayout:false,
    partialsDir:path.join(__dirname,'views','partials')

})

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

app.engine('html',hbs.engine);

app.set('view engine','html')
app.set('views',path.join(__dirname,'views','templates'))

app.use(express.static('public'))

app.use(express.urlencoded({extended:true}))

app.use(express.json())

app.use(checkAuth)


app.get('/agendamento',(req,res)=>{


const sql = 'SELECT * FROM agendamentos';

conn.query(sql,(erro,resposta)=>{

if(erro){
    console.log(erro);
}
else{

resposta.forEach(agendamento => {
    agendamento.data_agendamento =
        agendamento.data_agendamento.toLocaleDateString('pt-BR'); //FORMATANDO A DATA
});

    console.log("Cadastros exibidos")

    res.render('agendamento',{
        agendamento:resposta
    });
}

})

})

    app.post("/agendamento/confirmar", function(req, res){

const nome = req.body.nome;
const servico = "Seção de Fotos";
const data = req.body.data;
const horario = req.body.horario;

const sql = "INSERT INTO agendamentos(nome_cliente,servico,data_agendamento,horario_agendamento) VALUES (?,?,?,?)"

conn.query(sql,[nome,servico,data,horario], erro=>{

if(erro){
    console.log(erro);
}
else{
    console.log("Inserção Realizada")
    res.redirect('/agendamento')
}

})

    })
  

    app.get("/portifolio", function(req, res){
        res.render('portifolio')
    })

    app.get("/pre-weeding", function(req, res){
      res.render('portifolio')
    })

    app.get("/agendamento", function(req, res){
        res.render('agendamento')
    })

    app.get("/curso", function(req, res){
        res.render('curso')
    })
        app.get("/", function(req, res){
        res.render('index')
    })

const conn = mySql.createConnection({

host:'localhost',
user:'root',
password:'Kap2405@07',
database:'uce'
})

conn.connect(erro=>{

if(erro){
    console.log("Erro ao conectar")
}
else{
    console.log("Conexão Realizada");
}

app.listen(porta);

})
