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

function CriarCampoDescricao(classe, text) {
    const ElementoSpan = CriarElemento("div", classe);
    ElementoSpan.innerHTML = text;

    return ElementoSpan;
}

function CriarBotaoWhatsapp(nome) {
    const ElementoBotao = CriarElemento("a", "botao-whatsapp", "WhatsApp");
    ElementoBotao.target = "_blank";
    ElementoBotao.href = "https://api.whatsapp.com/send?phone=55996034619&text=Olá,%20tenho%20interesse%20no%20produto:%20" + nome;

    return ElementoBotao;
}

function CriarTagDescricaoProduto(produto) {
    const ElementoDescricao = CriarElemento("div", "container-produto-descricao");
    ElementoDescricao.appendChild(CriarElemento("span", "titulo", produto.nome));
    ElementoDescricao.appendChild(CriarTagValor("valor-de", produto.de));
    ElementoDescricao.appendChild(CriarTagValor("valor-por", produto.por));
    ElementoDescricao.appendChild(CriarCampoDescricao("descricao", produto.descricao));
    ElementoDescricao.appendChild(CriarBotaoWhatsapp(produto.nome));

    return ElementoDescricao;
}

function CriarDivProduto(produto) {
    const ElementoProduto = CriarElemento("div", "container-produto");
    ElementoProduto.appendChild(CriarTagIMG(produto.imgalt, produto.imglink));
    ElementoProduto.appendChild(CriarTagDescricaoProduto(produto));
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