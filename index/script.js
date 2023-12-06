document.addEventListener('DOMContentLoaded', function () {
    // Elemento do popup
    let popup = document.getElementById('popup');

    // Função para exibir o popup
    function exibirPopup() {
        popup.style.display = 'block';
    }

    // Exibir o popup assim que a página for carregada
    exibirPopup();

    // Botão para fechar o popup
    let closePopupBtn = document.getElementById('closePopupBtn');

    // Fechar o popup quando o botão de fechar for clicado
    closePopupBtn.addEventListener('click', function () {
        popup.style.display = 'none';
    });

    // Fechar o popup se clicar fora dele
    window.addEventListener('click', function (event) {
        if (event.target === popup) {
            popup.style.display = 'none';
        }
    });

    // Enviar formulário da newsletter (no popup)
    let popupNewsletterForm = document.getElementById('popupNewsletterForm');
    popupNewsletterForm.addEventListener('submit', function (event) {
        event.preventDefault(); // Impede o envio padrão do formulário
        alert('Formulário do Popup enviado!'); 
        // Opcional: Fechar o popup após enviar o formulário
        popup.style.display = 'none';
    });
});


//CARROSSEL

$(document).ready(function () {
    $('.slick-carousel').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: true,
      dots: true,
      infinite: false,
    });
  });
  



  
  
  