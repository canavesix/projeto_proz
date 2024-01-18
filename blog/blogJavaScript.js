// Variáveis para controlar o estado do carrossel
var currentIndex = 0;
var totalSlides = document.querySelectorAll('.image-item').length;

// Função para mostrar o slide anterior
function prevSlide() {
  currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
  updateCarousel();
}

// Função para mostrar o próximo slide
function nextSlide() {
  currentIndex = (currentIndex + 1) % totalSlides;
  updateCarousel();
}

// Função para atualizar a exibição do carrossel
function updateCarousel() {
  var slides = document.querySelectorAll('.image-item');
  
  // Oculta todos os slides
  slides.forEach(function (slide) {
    slide.style.display = 'none';
  });

  // Mostra o slide atual
  slides[currentIndex].style.display = 'block';
}

// Chama a função updateCarousel para exibir o slide inicial
updateCarousel();

setInterval(function () {
  nextSlide();
}, 3000);  // 3000 milissegundos (3 segundos)



// *Gustavo*- Arrumei a função de busca da página.
function searchPage() {
  var searchTerm = document.getElementById("searchBox").value.toLowerCase();
  var articles = document.getElementsByClassName("artigo-container");

  for (var i = 0; i < articles.length; i++) {
    var articleContent = articles[i].textContent.toLowerCase();

    if (articleContent.includes(searchTerm)) {
      articles[i].style.display = "block";
    } else {
      articles[i].style.display = "none";
    }
  }
}

// *Gustavo*- Fiz até aqui.

function handleKeyPress(event) {
  // Adicione aqui qualquer lógica adicional que você deseja executar quando uma tecla é pressionada na caixa de pesquisa
}

  // Apertar enter para efetuar pesquisa
function handleKeyPress(event) {
  if (event.key === 'Enter') {
      searchPage();
  }
}



