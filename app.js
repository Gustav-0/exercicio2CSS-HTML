//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let amigos = [];

function adicionarAmigo() {
    let addAmigo = document.querySelector('input').value; // Seleciona o campo de digitação
    if (addAmigo == 0){ 
        alert('Por favor, insira um nome.'); // Se o campo estiver vazio aparece essa menssagem
    } else{
        amigos.push(addAmigo); // Adiciona o texto digitado
    }
    limparCampo();
    atualizarLista();
}

function limparCampo() {
    addAmigo = document.querySelector('input'); // Seleciona o campo de digitação
    addAmigo.value = ''; // Deixa o campo em branco
}

function atualizarLista() {
    const lista = document.getElementById("listaAmigos");
    lista.innerHTML = ""; // Limpa a lista antes de adicionar novos elementos

    for (let amigo of amigos) {
        const item = document.createElement("li");
        item.textContent = amigo;
        lista.appendChild(item);
    }
}

function sortearAmigo() {
    if (amigos.length === 0) {
        document.getElementById("resultado").innerHTML = "Nenhum amigo disponível para sorteio.";
        return;
    }
    
    const indiceAleatorio = Math.floor(Math.random() * amigos.length);
    const amigoSorteado = amigos[indiceAleatorio];
    document.getElementById("resultado").innerHTML = `Amigo sorteado: ${amigoSorteado}`;
}
