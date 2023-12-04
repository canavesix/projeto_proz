//SCRIPT DO CARROSSEL

      // Funções para navegar pelos slides

let currentIndex = 0;
let intervalId; // Teste de trocar imagens auto


function showSlide(index) {
  const imageList = document.querySelector('.image-list');
  const imageWidth = document.querySelector('.image-item').clientWidth;
  const newPosition = -index * imageWidth;
  imageList.style.transform = `translateX(${newPosition}px)`;
  currentIndex = index;
}

function prevSlide() {
  currentIndex = (currentIndex - 1 + getImageCount()) % getImageCount();
  showSlide(currentIndex);
}

function nextSlide() {
  currentIndex = (currentIndex + 1) % getImageCount();
  showSlide(currentIndex);
}

function getImageCount() {
  return document.querySelectorAll('.image-item').length;
}

window.prevSlide = prevSlide;
window.nextSlide = nextSlide;


intervalId = setInterval(nextSlide, 5000); // Intervalo para troca
showSlide(currentIndex);  // Intervalo para troca


// FUNCTION - REALIZAR PESQUISA NA PÁGINA

/*
function realizarPesquisa() {
  // Obtenha o valor digitado na caixa de pesquisa
  var termoPesquisa = document.getElementById("searchBox").value;

  // Execute a lógica da pesquisa aqui (pode ser exibindo em um console por enquanto)
  console.log("Termo de pesquisa: " + termoPesquisa);
}
*/


// SEARCH DA PÁGINA - TESTE 2

/* function searchPage() {
  // Obter o valor de pesquisa do input
  var searchTerm = document.getElementById('searchBox').value;

  // Verificar se o termo de pesquisa está presente na página
  var pageContent = document.body.innerText;
  var searchTermIndex = pageContent.indexOf(searchTerm);

  if (searchTermIndex !== -1) {
      alert('Termo de pesquisa encontrado na posição: ' + searchTermIndex);
  } else {
      alert('Termo de pesquisa não encontrado na página.');
  }
}
*/

// SEARCH DA PÁGINA - TESTE 3

function searchPage() {
  // Obter o valor de pesquisa do input
  var searchTerm = document.getElementById('searchBox').value.toLowerCase();

  // Remover destaque de pesquisas anteriores
  var highlightedRows = document.querySelectorAll('.highlight');
  highlightedRows.forEach(function(row) {
      row.classList.remove('highlight');
  });

  // Procurar nos elementos das linhas da tabela
  var rows = document.querySelectorAll('tr[id^="Artigo"]');
  var found = false;

  rows.forEach(function(row) {
      var rowText = row.innerText.toLowerCase();

      if (rowText.includes(searchTerm)) {
          found = true;
          row.classList.add('highlight');
          alert('Termo de pesquisa encontrado na linha da tabela com ID: ' + row.id);
      }
  });

  if (!found) {
      alert('Termo de pesquisa não encontrado nas linhas da tabela.');
  }
}

  // Apertar enter para efetuar pesquisa
function handleKeyPress(event) {
  if (event.key === 'Enter') {
      searchPage();
  }
}