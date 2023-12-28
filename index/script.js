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

    // Enviar formulário da newsletter (no popup)
        let popupNewsletterForm = document.getElementById('popupNewsletterForm');
        popupNewsletterForm.addEventListener('submit', function (event) {
        event.preventDefault(); 

        let nameNewsInput = document.getElementById("nameNews");
        let nameValue = nameNewsInput.value.trim(); //esse "trim()"" serve para remover espaços em branco que o usuário pode colocar sem querer
        

        // essa função é a mesma que tem na tela de suporte, pra não deixar passar nome com menos de 3 caracters e nem com números
        if (nameValue.length < 3 || /\d/.test(nameValue)) {
            if (nameValue.length < 3) {
                alert('Por favor, insira um nome com pelo menos 3 caracteres.');
            } else {
                alert('O campo nome não pode conter números.');
            }
            return; // coloquei essa função para não fechar o popup quando alguma informação estiver errada, dando a opção do usuário corrigir sem fechar.
        }

        alert('E-mail enviado, obrigado :D !');

        popup.style.display = 'none';
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
  



});