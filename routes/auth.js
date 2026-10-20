const express = require('express')
const router = express.Router()
const pool = require('../config/database')
const bcrypt = require('bcrypt');


router.get("/", (req, res)=>{
    const alerta = req.session.alerta;
    delete req.session.alerta;
    res.render('index',{
        alerta:alerta
    });
})

router.get("/portifolio/", (req, res)=>{
    res.render('portifolio')
})

router.get("/pre-weeding/", (req, res)=>{
    res.render('pre-weeding')
})

router.post('/sair/',(req,res)=>{

req.session.destroy((erro)=>{

if(erro){
    console.log(erro);
    return res.status(500).send("Erro ao sair");
}

res.clearCookie('connect.sid'); 
res.redirect('/')

})


})

const impedirCadastroLogado = (req, res, next) => {

    if(req.session.id_cliente){

        return res.status(403).render('cadastro');

    }

    next();

};

router.post('/login/entrar/',(req,res)=>{

const email = req.body.usuario;
const senha = req.body.senha;

const sql = 'SELECT id_cliente, email_cliente, senha from clientes WHERE email_cliente = ?'

if(req.session.id_cliente){
    
    req.session.alerta = "Você já está logado";

    return res.redirect('/');
   
}

pool.query(sql,[email],(erro,resultado)=>{

if(erro){
    console.log(erro);
    res.status(404);
}

else if(resultado == 0){
    console.log("Usuário não encontrado")
}

else{
    console.log("Deu certo");
}

const senhaUser = resultado[0].senha;

if(bcrypt.compareSync(senha,senhaUser)){
 
    req.session.regenerate((erro)=>{
        if(erro){
        console.log(erro);
        }
    })

req.session.id_cliente = resultado[0].id_cliente;

req.session.save((erro)=>{

    if(erro){
        console.log(erro);
    }

})
    res.redirect('/');
    
}
else{
    res.render('login',{

     erro: "Dados Incorretos"   

    })
}
    
})

})



router.post('/cadastrar/cliente/',impedirCadastroLogado, async (req,res)=>{
   
const nome = req.body.nome;
const email = req.body.email;
const senha = req.body.senha;
const confirmarSenha = req.body.confirmar;
const telefone = req.body.telefone;

const senhaProtegida = await bcrypt.hash(senha, 12);

const sql = 'INSERT INTO clientes(nome_cliente,email_cliente,senha,telefone) VALUES (?,?,?,?)'


if(senha == confirmarSenha){


pool.query(sql,[nome,email,senhaProtegida,telefone], (erro,resultado)=>{

console.log("Inserção Realizada")

if(req.session.id_cliente){

  req.session.alerta = "Cadastro realizado com sucesso";

  return res.redirect('/');

}

if(erro){
    console.log(erro);
}

req.session.regenerate((erro)=>{

if(erro){
    console.log(erro);
}

})

req.session.id_cliente = resultado;

req.session.save((erro)=>{

if(erro){
    console.log(erro);
}

})
res.redirect('/');



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