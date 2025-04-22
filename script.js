document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('cadastroForm');
    const resultadoDiv = document.getElementById('resultado');
    const resDescricao = document.getElementById('res-descricao');
    const resValor = document.getElementById('res-valor');
    const resCategoria = document.getElementById('res-categoria');

    form.addEventListener('submit', function(event) {
        event.preventDefault(); 

        const descricao = document.getElementById('descricao').value;
        const valor = document.getElementById('valor').value;
        const categoria = document.getElementById('categoria').value;

        resDescricao.textContent = descricao;
        resValor.textContent = valor;
        resCategoria.textContent = categoria;

        resultadoDiv.classList.remove('hidden');
        form.reset(); 
    });
});