function CriarDivProduto(produto) {
    const Div1 = document.createElement("div");
    Div1.className = "container-produto";

    const IMG = document.createElement("img");
    IMG.src = produto.imglink;
    IMG.alt = produto.imgalt;

    const Div2 = document.createElement("div");
    Div2.className = "container-produto-descricao";

    const Span1 = document.createElement("span");
    Span1.className = "titulo";
    Span1.innerText = produto.nome;

    const Span2 = document.createElement("span");
    Span2.className = "valor-de";
    Span2.innerHTML = `De: <span>${produto.de.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}</span>`;

    const Span3 = document.createElement("span");
    Span3.className = "valor-por";
    Span3.innerHTML = `De: <span>${produto.por.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })
        }</span > `;

    const Div3 = document.createElement("div");
    Div3.className = "descricao";
    Div3.innerText = produto.descricao;

    Div2.appendChild(Span1);
    Div2.appendChild(Span2);
    Div2.appendChild(Span3);
    Div2.appendChild(Div3);

    Div1.appendChild(IMG);
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