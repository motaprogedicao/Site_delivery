var botoes = document.getElementsByClassName('adicionar');
//captura de dados
//seleciona todos elementos html que tem a classe adicionar e retorna uma HTMLCollection
let carrinho = []; //cria o vetor do carrinho;

function adicionar_produto(event){
//funcao pega os valores dos atributos dos produtos iterados e cria um objeto produto

    var produto_div = event.target.parentElement;//pega o elemento pai do botão que é a div class produto

    var id = produto_div.getAttribute("data-id");
    var nome = produto_div.getAttribute("data-nome");
    var preco = parseFloat(produto_div.getAttribute("data-preco"));

    var produto = {
        id:id,
        nome:nome,
        preco:preco,
    };

   carrinho.push(produto); //adiciona o objeto criado no evento com o vetor

//salvando a entrada do vetor carrinho no localstore com string
 localStorage.setItem('cr', JSON.stringify(carrinho))
    }

var carrinhoRecuperado = JSON.parse(localStorage.getItem('cr'));


for(var i=0;i<botoes.length;i++){ //percorre cada botão da HTMLCollection e adiciona um código que será executado quando o botão for clicado
    botoes[i].addEventListener("click",adicionar_produto);
}


