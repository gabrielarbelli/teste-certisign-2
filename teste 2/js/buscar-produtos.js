$(window).ready(function(){
    
    var xhr = new XMLHttpRequest();

    xhr.open("GET", "https://gip.certisign.com.br/gip/rest/vitrine/validades/site/entrevista-candidato");

    xhr.addEventListener("load", function() {
        var erroAjax = document.querySelector("#erro-ajax");

        if (xhr.status == 200) {
            //erroAjax.classList.add("invisivel");
            var resposta = xhr.responseText;
            var produtos = JSON.parse(resposta);

            produtos.forEach(function(produto) {
                adicionaProdutos(produto);
                adicionaPopups(produto);
            });
        } else {
            //erroAjax.classList.remove("invisivel");
        }
    });

    xhr.send();
    
});

function adicionaProdutos(produto) {

    var linhaProduto = document.createElement("div");
    linhaProduto.classList.add("produto");

    var imagem = document.createElement("img");
    $(imagem).attr("src",produto.imagem);
    $(imagem).attr("width","176px");
    $(imagem).attr("height","111px");
    linhaProduto.appendChild(imagem);

    var midia = document.createElement("h1");
    midia.textContent = produto.midia;
    linhaProduto.appendChild(midia);

    var validade = document.createElement("h2");
    validade.textContent = "VALIDADE: " + produto.validade + " MESES";
    linhaProduto.appendChild(validade);

    var tipo = document.createElement("h2");
    tipo.textContent = "TIPO: " + produto.tipo;
    linhaProduto.appendChild(tipo);

    var link = document.createElement("a");
    link.classList.add("botaoComprar");
    link.textContent = "COMPRAR";
    $(link).attr("href",produto.linkGar);
    linhaProduto.appendChild(link);

    var popup = document.createElement("img");
    $(popup).attr("src","images/saiba.png");
    $(popup).attr("onclick","lightBoxOpen("+produto.id+")");
    linhaProduto.appendChild(popup);
    
    var container = document.querySelector("#container");
    container.appendChild(linhaProduto);
    
}

function adicionaPopups(produto) {

    var linhaPopups = document.createElement("div");
    linhaPopups.classList.add("popup");

    var white = document.createElement("div");
    white.classList.add("white_content");
    $(white).attr("id","light"+produto.id);
    linhaPopups.appendChild(white);

    var linha0 = document.createElement("div");
    linha0.classList.add("linha0");
    white.appendChild(linha0);

    var fechar = document.createElement("img");
    fechar.classList.add("fechar");
    $(fechar).attr("src","images/fechar.png");
    $(fechar).attr("onclick","lightBoxClosed("+produto.id+")");
    linha0.appendChild(fechar);

    var nome = document.createElement("h3");
    nome.textContent = "TIPO: " + produto.nome;
    white.appendChild(nome);

    var imagem = document.createElement("img");
    $(imagem).attr("src",produto.imagem);
    white.appendChild(imagem);

    var categoria = document.createElement("h4");
    categoria.textContent = "Categoria: " + produto.categoria;
    white.appendChild(categoria);

    var midia = document.createElement("h4");
    midia.textContent = "Mídia: "+produto.midia;
    white.appendChild(midia);

    var link = document.createElement("a");
    link.classList.add("botaoComprar2");
    link.textContent = "COMPRAR";
    $(link).attr("href",produto.linkGar);
    white.appendChild(link);

    var black = document.createElement("div");
    black.classList.add("black_overlay");
    $(black).attr("id","fade"+produto.id);
    linhaPopups.appendChild(black);

    var popups = document.querySelector("#popups");
    popups.appendChild(linhaPopups);

}