// Seleciona o elemento do DOM onde os produtos serão renderizados
let container = document.getElementById("produtos-conteiner");

// Itera sobre cada objeto dentro do array 'produtos'
for (let produto of produtos) {
    // Cria um novo elemento div para representar o cartão do produto
    let card = document.createElement("div");
    // Adiciona a classe 'card' para fins de estilização CSS
    card.className = "card";
    // Define a estrutura HTML interna do cartão, inserindo os dados do produto dinamicamente
    card.innerHTML = `
    <img src="${produto.imagem}" alt="${produto.nome}" />
    <h3>${produto.nome}</h3>
    <p>R$ ${produto.preco}</p>
    <button>Comprar</button>
    `;
    // Adiciona o cartão criado ao contêiner principal na página
    container.appendChild(card);
    caches.log(produto);
}