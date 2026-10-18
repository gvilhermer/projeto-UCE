const express = require('express')
const router = express.Router()
const pool = require('../config/database')
const bcrypt = require('bcrypt');


router.get("/", (req, res)=>{
    res.render('index')
})

router.get("/portifolio/", (req, res)=>{
    res.render('portifolio')
})

router.get("/pre-weeding/", (req, res)=>{
    res.render('pre-weeding')
})

router.post('/cadastrar/cliente/', (req,res)=>{
   
const nome = req.body.nome;
const email = req.body.email;
const senha = req.body.senha;
const confirmarSenha = req.body.confirmar;
const telefone = req.body.telefone;

const senhaProtegida = bcrypt.hash(senha, 12);

const sql = 'INSERT INTO clientes(nome_cliente,email_cliente,senha,telefone) VALUES (?,?,?,?)'


if(senha == confirmarSenha){

pool.query(sql,[nome,email,senhaProtegida,telefone], (erro)=>{

console.log("Inserção Realizada")
res.redirect('/portifolio')

if(erro){
    console.log(erro);
}

})    

}

else{

   res.render('cadastro',{
    erro: "As senhas não coincidem!"
  })


}



});

router.get('/agendamento/',(req,res)=>{


const sql = 'SELECT * FROM agendamentos';

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

router.post("/agendamento/confirmar", (req, res)=>{

    const nome = req.body.nome;
    const servico = "Seção de Fotos";
    const data = req.body.data;
    const horario = req.body.horario;

    const sql = "INSERT INTO agendamentos(nome_cliente,servico,data_agendamento,horario_agendamento) VALUES (?,?,?,?)"

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


router.get("/curso/", (req, res)=>{
    res.render('curso')
})

router.get("/cadastro/", (req, res)=>{
    res.render('cadastro')
})

router.get("/login/", (req, res)=>{
    res.render('login')
})


module.exports = router