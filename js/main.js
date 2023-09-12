const form = document.getElementById("novoItem") // Guarda os valores do input form dentro de uma constante
const lista = document.querySelector("[data-lista]")
const listaDeItens = JSON.parse.localStorage.getItem["itens"] || []

listaDeItens.forEach((elemento) => {
    
})


form.addEventListener("submit", (evento) => { //adiciona um escutador de eventos que espera pelo submit do form, executando uma arrow function
    evento.preventDefault() //interrompe o comportamento de enviar para a pagina do formulário
    const buscaPeloNome = evento.target.elements['nome'];
    const buscaPeloNumero = evento.target.elements['quantidade'];

    //console.log(evento.target.elements['nome'].value) // o value permite acessar o valor do input, sem ele pegamos todo o input, pdoe tambem usar array target[0]
    //console.log(evento.target.elements['quantidade'].value) // busca pelo nome do input
    criarElemento(buscaPeloNome.value, buscaPeloNumero.value)
    buscaPeloNome.value = "";
    buscaPeloNumero.value = "";
})

function criarElemento(nome, quantidade) {

    const novoItem = document.createElement('li')
    novoItem.classList.add("item")

    const numeroItem = document.createElement('strong')
    numeroItem.innerHTML = quantidade

    novoItem.appendChild(numeroItem) 
    novoItem.innerHTML += nome

    lista.appendChild(novoItem)//adiciona um elemento filho

    const itemAtual = {
        "nome": nome,
        "quantidade": quantidade,
    }

    listaDeItens.push(itemAtual) // insere um item no array
    //localStorage.setItem("nome", itemAtual.nome)  // registra o nome no local storage
    //localStorage.setItem("quantidade", itemAtual.quantidade) //registra a quantidade no local storage
    localStorage.setItem("item", JSON.stringify(itemAtual)) //registra o item no local storage, que só aceita JSON/string -> retorna um objeto no armazenamento {} <- stringify é o raio strigfador
}