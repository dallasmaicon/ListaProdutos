function CriarElemento(tag, classe = "", text = "") {
    const Elemento = document.createElement(tag);
    Elemento.className = classe;
    Elemento.innerText = text;

    return Elemento;
}

function CriarTagIMG(alt, src) {
    const ElementoIMG = CriarElemento("img");
    ElementoIMG.src = src;
    ElementoIMG.alt = alt;

    return ElementoIMG;
}

function CriarTagValor(classe, valor) {
    const ElementoSpan = CriarElemento("span", classe);
    ElementoSpan.innerHTML = `De: <span>${valor.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}</span>`;

    return ElementoSpan;
}

function CriarDivProduto(produto) {
    const ElementoProduto = CriarElemento("div", "container-produto");

    const Div2 = CriarElemento("div", "container-produto-descricao");
    Div2.appendChild(CriarElemento("span", "titulo", produto.nome));
    Div2.appendChild(CriarTagValor("valor-de", produto.de));
    Div2.appendChild(CriarTagValor("valor-por", produto.por));
    Div2.appendChild(CriarElemento("div", "descricao", produto.descricao));

    ElementoProduto.appendChild(CriarTagIMG(produto.imgalt, produto.imglink));
    ElementoProduto.appendChild(Div2);
    return ElementoProduto;
}

async function CarregarProdutos() {
    const DivContainer = document.getElementById("root");

    const res = await fetch("produtos.json");
    const data = await res.json();
    data.map(produto => {
        DivContainer.appendChild(CriarDivProduto(produto));
    });
}


CarregarProdutos()