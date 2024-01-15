function mostrarProdutoCard() {
    document.getElementById("produtoCard").style.display = "block";
}

function fecharProdutoCard() {
    var container = document.getElementById('imagemContainer');
    container.innerHTML = '';  // aqui ele reinicia o popup para gerar a imagem novamente, pois antes quando clicava para comprar novamente, ele já estava vindo com o qrcode aberto.
    document.getElementById("produtoCard").style.display = "none";
}

function exibirImagem() {
    var container = document.getElementById('imagemContainer');
  
    if (container.querySelector('img')) {
        alert('Imagem já exibida!');
        return; 
    }
  
    var imagem = document.createElement('img');
    imagem.src = '/pagamento/output-file-path/file.png'; 
    container.appendChild(imagem);
  
    document.getElementById('botaoImagem').onclick = null;
  
    setTimeout(function() {
        alert('Pagamento confirmado, obrigado!');
        fecharProdutoCard(); 
    }, 4000); 
}

function fecharImagem() {
    var container = document.getElementById('imagemContainer');
    container.innerHTML = '';
    window.location.href = '/catalogo/catalogo.html'; 
}
