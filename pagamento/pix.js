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


function fecharImagem() {
  var container = document.getElementById('imagemContainer');
  container.innerHTML = '';
  window.location.href = '/catalogo/catalogo.html'; // Redireciona para catalogo após fechar a imagem
}



document.getElementById('botaoImagem').onclick = exibirImagem;

