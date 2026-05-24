// const opcoesDePagamento = document.querySelectorAll('.opcao');
// const botaoConfirmar = document.getElementById("confirmar");

//     opcoesDePagamento.forEach(opcaoClicada => {
//         opcaoClicada.addEventListener('click', () => {
            
//         opcoesDePagamento.forEach(card => card.classList.remove('selecionada'));
            
//         opcaoClicada.classList.add('selecionada');
        
//         botaoConfirmar.removeAttribute('disable');
        
//         });
//     });
document.addEventListener("DOMContentLoaded", function() {
        
        const opcoesDePagamento = document.querySelectorAll('.opcao');
        const botaoConfirmar = document.getElementById('confirmar');

        // Um teste rápido no console do navegador para te ajudar a debugar:
        if (!botaoConfirmar) {
            console.error("Erro: Não encontrei nenhum elemento com a id 'confirmar' no HTML!");
            return;
        }

        opcoesDePagamento.forEach(opcaoClicada => {
            opcaoClicada.addEventListener('click', () => {
                
                // 1. Alterna a classe visual (borda verde)
                opcoesDePagamento.forEach(card => card.classList.remove('selecionada'));
                opcaoClicada.classList.add('selecionada');
                
                // 2. FORMA MODERNA: Altera a propriedade diretamente para falso
                botaoConfirmar.disabled = false;
                
                // 3. GARANTIA EXTRA: Caso seja uma tag <a> ou <div> em vez de <button>
                botaoConfirmar.removeAttribute('disabled');
                
            });
        });
    });