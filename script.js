function CriarElemento(tag, classe = "", text = "") {
    const Elemento = document.createElement(tag);
    Elemento.className = classe;
    Elemento.innerText = text;

    return Elemento;
}

function CriarTagIMG(alt, src) {
    const IMG = CriarElemento("img");
    IMG.src = src;
    IMG.alt = alt;

    return IMG;
}

function CriarTagValor(classe, valor) {
    const Span2 = CriarElemento("span", classe);
    Span2.innerHTML = `De: <span>${valor.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}</span>`;

    return Span2;
}

function CriarDivProduto(produto) {
    const Div1 = CriarElemento("div", "container-produto");

    const Div2 = CriarElemento("div", "container-produto-descricao");
    Div2.appendChild(CriarElemento("span", "titulo", produto.nome));
    Div2.appendChild(CriarTagValor("valor-de", produto.de));
    Div2.appendChild(CriarTagValor("valor-por", produto.por));
    Div2.appendChild(CriarElemento("div", "descricao", produto.descricao));

    Div1.appendChild(CriarTagIMG(produto.imgalt, produto.imglink));
    Div1.appendChild(Div2);
    return Div1;
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