document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('cadastroForm');
    const resultadoDiv = document.getElementById('resultado');
    const resDescricao = document.getElementById('res-descricao');
    const resValor = document.getElementById('res-valor');
    const resCategoria = document.getElementById('res-categoria');
    const listaGastosTableBody = document.querySelector('#listaGastos tbody');
    const valorTotalElement = document.getElementById('valorTotal');
    const gastos = []; 
    let totalGastos = 0; 

    form.addEventListener('submit', function(event) {
        event.preventDefault(); 

        const descricao = document.getElementById('descricao').value;
        const valor = parseFloat(document.getElementById('valor').value); 
        const categoria = document.getElementById('categoria').value;

        const novoGasto = {
            descricao: descricao,
            valor: valor,
            categoria: categoria
        };

        gastos.push(novoGasto); 

        
        resDescricao.textContent = descricao;
        resValor.textContent = valor.toFixed(2); 
        resCategoria.textContent = categoria;
        resultadoDiv.classList.remove('hidden');

        atualizarListaGastos(); 
        atualizarTotalGastos(); 
        form.reset(); 
    });

    function atualizarListaGastos() {
        listaGastosTableBody.innerHTML = ''; 
        gastos.forEach((gasto, index) => {
            const row = listaGastosTableBody.insertRow();
            const descricaoCell = row.insertCell();
            const valorCell = row.insertCell();
            const categoriaCell = row.insertCell();
            const acoesCell = row.insertCell();

            descricaoCell.textContent = gasto.descricao;
            valorCell.textContent = `R$ ${gasto.valor.toFixed(2)}`;
            categoriaCell.textContent = gasto.categoria;


            if (gasto.valor > 100) {
                valorCell.classList.add('valor-alto');
            }

            const excluirButton = document.createElement('button');
            excluirButton.textContent = 'Excluir';
            excluirButton.classList.add('excluir-button'); 
            excluirButton.addEventListener('click', function() {
                excluirGasto(index);
            });
            acoesCell.appendChild(excluirButton);
        });
    }

    function excluirGasto(index) {
        gastos.splice(index, 1); 
        atualizarListaGastos(); 
        atualizarTotalGastos(); 
    }

    function atualizarTotalGastos() {
        totalGastos = gastos.reduce((soma, gasto) => soma + gasto.valor, 0);
        valorTotalElement.textContent = totalGastos.toFixed(2);
    }

    
    atualizarTotalGastos();
});