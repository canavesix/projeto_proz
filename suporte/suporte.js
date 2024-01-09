const usernameInput = document.getElementById("username");
const usernameLabel = document.querySelector('label[for="username"]');
const usernameHelper = document.getElementById("username-helper");
const apenasLetras = /^[A-Za-z]+$/;

const useremailInput = document.getElementById("email");
const useremailLabel = document.querySelector('label[for="email"]');
const useremailHelper = document.getElementById("email-helper");
useremailInput.setAttribute("autocomplete", "off");

const celularInput = document.getElementById("celular");
const celularLabel = document.querySelector('label[for="celular"]');
const celularHelper = document.getElementById("celular-helper");
celularInput.setAttribute("autocomplete", "off");

const mensagemInput = document.getElementById("mensagem");
const mensagemHelper = document.getElementById("mensagem-helper");

function manipulaPopup(input, label) {
    input.addEventListener("focus", () => {
        label.classList.add("required-popup");
    });

    input.addEventListener("blur", () => {
        label.classList.remove("required-popup");
    });
}

manipulaPopup(usernameInput, usernameLabel);

function validarInput(input, regex, minLength, errorText) {
    input.addEventListener("input", (event) => {
        const valorDigitado = event.target.value;

        if (!regex.test(valorDigitado)) {
            input.classList.remove("correct");
            input.classList.add("error");
            input.nextElementSibling.innerText = errorText;
            input.nextElementSibling.classList.add("visible");
        } else if (valorDigitado.length < minLength) {
            input.classList.remove("correct");
            input.classList.add("error");
            input.nextElementSibling.innerText = `O campo deve ter no mínimo ${minLength} caracteres`;
            input.nextElementSibling.classList.add("visible");
        } else {
            input.classList.remove("error");
            input.nextElementSibling.classList.remove("visible");
            input.nextElementSibling.innerText = "";
            input.classList.add("correct");
        }
    });
}

validarInput(usernameInput, apenasLetras, 3, "Seu nome deve conter apenas letras");
validarInput(useremailInput, /.+@.+\..+/, 5, "Por favor, insira um e-mail válido");
validarInput(celularInput, /^\d{11}$/, 11, "Insira um número de celular válido (11 dígitos)");

mensagemInput.addEventListener("input", () => {
    const mensagemValue = mensagemInput.value.trim();
    const palavras = mensagemValue.split(/\s+/).filter((word) => word.length > 0);
    const contagemPalavras = palavras.length;

    if (contagemPalavras < 5) {
        mensagemInput.classList.remove("correct");
        mensagemInput.classList.add("error");
        mensagemHelper.innerText = "Parece que seu texto está um pouco curto, conte um pouco mais!";
        mensagemHelper.classList.add("visible");
    } else {
        mensagemInput.classList.remove("error");
        mensagemHelper.classList.remove("visible");
        mensagemHelper.innerText = "";
        mensagemInput.classList.add("correct");
    }
});

const enviarBtn = document.getElementById("enviarBtn");

enviarBtn.addEventListener("click", (event) => {
    event.preventDefault();

    const nomeValido = usernameInput.classList.contains("correct");
    const emailValido = useremailInput.classList.contains("correct");
    const celularValido = celularInput.classList.contains("correct");
    const mensagemValida = mensagemInput.classList.contains("correct");

    if (nomeValido && emailValido && celularValido && mensagemValida) {
        alert("Obrigado pelo seu feedback :D !");
    } else {
        alert("Ops, parece que esqueceu algum campo :( !");
    }
});
