function entrar(){

const usuario = document.getElementById("usuario").value;
const senha = document.getElementById("senha").value;


if(usuario == "" || senha == ""){

alert("Preencha Todos os Campos");

return;

}

else{

    window.location = "/Pagina_Inicial.html";

}


}