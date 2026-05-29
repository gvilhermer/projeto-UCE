document.addEventListener("DOMContentLoaded", function() {
        
    const opcoesDePagamento = document.querySelectorAll('.opcao');
    const botaoConfirmar = document.getElementById('confirmar');
    
        opcoesDePagamento.forEach(opcaoClicada => {
            opcaoClicada.addEventListener('click', () => {
                
                opcoesDePagamento.forEach(card => card.classList.remove('selecionada'));
                opcaoClicada.classList.add('selecionada');
                
                botaoConfirmar.disabled = false;
            
            });
        });
    
    botaoConfirmar.addEventListener("click",function(){

    alert("Compra realiza com Sucesso");
        
    })
});