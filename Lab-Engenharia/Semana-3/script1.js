const itens = [];
const formulario = document.getElementById('formulario');
const listaOrdenada = document.getElementById('listaOrdenada');

formulario.addEventListener('submit', function(event) {
    event.preventDefault();
    const novoItem = document.getElementById('novoItem').value.trim();

    if (novoItem) {
        itens.push(novoItem);
        itens.sort((a, b) => a.localeCompare(b));
        atualizarLista();
        formulario.reset();
    }
});

function atualizarLista() {
    listaOrdenada.innerHTML = '';
    itens.forEach(item => {
        const li = document.createElement('li');
        li.textContent = item;
        listaOrdenada.appendChild(li);
    });
}