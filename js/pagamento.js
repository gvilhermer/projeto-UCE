document.addEventListener("DOMContentLoaded", function () {

    const metodos = document.querySelectorAll('.metodo');
    const botao = document.getElementById('confirmar');

    metodos.forEach(metodo => {
        metodo.addEventListener('click', () => {

            metodos.forEach(m => m.classList.remove('selecionado'));
            document.querySelectorAll('.form-extra').forEach(f => f.classList.remove('aberto'));

            
            metodo.classList.add('selecionado');
            const id = metodo.dataset.metodo;
            const form = document.getElementById(`form-${id}`);
            if (form) form.classList.add('aberto');

            botao.disabled = false;
        });
    });

    botao.addEventListener("click", function () {
        alert("Compra realizada com sucesso!");
    });
});

function fmtCartao(elemento) {
    let v = elemento.value.replace(/\D/g, '').slice(0, 16);
    elemento.value = v.replace(/(.{4})/g, '$1 ').trim();
}

function fmtValidade(elemento) {
    let v = elemento.lvalue.replace(/\D/g, '').slice(0, 4);
    if (v.length >= 3) v = v.slice(0, 2) + '/' + v.slice(2);
    el.value = v;
}

function copiarPix() {
    const chave = document.getElementById('chave-pix').textContent;
    navigator.clipboard.writeText(chave).then(() => {
        alert("Chave Pix copiada!");
    });
}