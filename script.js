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

function CriarDivProduto(produto) {
    const Div1 = CriarElemento("div", "container-produto");
    const Div2 = CriarElemento("div", "container-produto-descricao");

    const Span2 = document.createElement("span");
    Span2.className = "valor-de";
    Span2.innerHTML = `De: <span>${produto.de.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}</span>`;

    const Span3 = document.createElement("span");
    Span3.className = "valor-por";
    Span3.innerHTML = `De: <span>${produto.por.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })
        }</span > `;

    Div2.appendChild(CriarElemento("span", "titulo", produto.nome));
    Div2.appendChild(Span2);
    Div2.appendChild(Span3);
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