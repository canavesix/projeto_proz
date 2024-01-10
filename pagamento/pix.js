
function exibirImagem() {
  
  var container = document.getElementById('imagemContainer');
  
  // Verifique se já há uma imagem exibida
  if (container.querySelector('img')) {
    alert('Imagem já exibida!');
    return; 
  }
  
 
  var imagem = document.createElement('img');
  
  
  imagem.src = 'output-file-path/file.png'; 
  
  
  container.appendChild(imagem);
  
  
  document.getElementById('botaoImagem').onclick = null;
  
  
  setTimeout(function() {
    alert('Pagamento confirmado, obrigado!');
    fecharImagem(); 
  }, 4000); 
}

// Função para fechar a imagem
function fecharImagem() {
  var container = document.getElementById('imagemContainer');
  container.innerHTML = ''; 
}


document.getElementById('botaoImagem').onclick = exibirImagem;
