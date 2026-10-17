const express = require('express')
const router = express.Router()
const pool = require('../config/database')


router.get("/", function(req, res){
    res.render('index')
})

router.get("/portifolio/", function(req, res){
    res.render('portifolio')
})

router.get("/pre-weeding/", function(req, res){
    res.render('pre-weeding')
})



router.get('/agendamento/',(req,res)=>{


const sql = 'SELECT * FROM agendamento';

pool.query(sql,(erro,resposta)=>{

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

router.post("/agendamento/confirmar", function(req, res){

    const nome = req.body.nome;
    const servico = "Seção de Fotos";
    const data = req.body.data;
    const horario = req.body.horario;

    const sql = "INSERT INTO agendamento(nome_cliente,servico,data_agendamento,horario_agendamento) VALUES (?,?,?,?)"

    pool.query(sql,[nome,servico,data,horario], erro=>{

    if(erro){
        console.log(erro);
    }
    else{
        console.log("Inserção Realizada")
        res.redirect('/agendamento')
    }

    })

})


router.get("/curso/", function(req, res){
    res.render('curso')
})

router.get("/cadastro/", function(req, res){
    res.render('cadastro')
})

router.get("/login/", function(req, res){
    res.render('login')
})


module.exports = router