let usernameInput = document.getElementById("username");
let usernameLabel = document.querySelector('label[for="username"]');
let usernameHelper = document.getElementById("username-helper");
let apenasLetras = /^[A-Za-z]+$/;

let useremailInput = document.getElementById("email");
let useremailLabel = document.querySelector('label[for="email"]');
let useremailHelper = document.getElementById("email-helper");
useremailInput.setAttribute("autocomplete", "off");

let celularInput = document.getElementById("celular");
let celularLabel = document.querySelector('label[for="celular"]');
let celularHelper = document.getElementById("celular-helper");
celularInput.setAttribute("autocomplete", "off");

const mensagemInput = document.getElementById("mensagem");
const mensagemHelper = document.getElementById("mensagem-helper");

// Função para manipular o popup de campo obrigatório
function manipulaPopup(input, label) {
    input.addEventListener("focus", () => {
        label.classList.add("required-popup");
    });

    input.addEventListener("blur", () => {
        label.classList.remove("required-popup");
    });
}

manipulaPopup(usernameInput, usernameLabel);

// Evento para validar o input enquanto o usuário digita o nome
usernameInput.addEventListener("input", (event) => {
    let valorDigitado = event.target.value;

    if (!apenasLetras.test(valorDigitado)) {
        usernameInput.classList.remove("correct");
        usernameInput.classList.add("error");
        usernameHelper.innerText = "Seu nome deve conter apenas letras";
        usernameHelper.classList.add("visible");
    } else if (valorDigitado.length < 3) {
        usernameInput.classList.remove("correct");
        usernameInput.classList.add("error");
        usernameHelper.innerText = "Seu nome deve conter mais de 3 letras";
        usernameHelper.classList.add("visible");
    } else {
        usernameInput.classList.remove("error");
        usernameHelper.classList.remove("visible");
        usernameHelper.innerText = "";
        usernameInput.classList.add("correct");
    }
});

// Validar valor do input de e-mail enquanto o usuário digita
useremailInput.addEventListener("input", (event) => {
    let valorDigitado = event.target.value;

    if (valorDigitado.length < 5 || !valorDigitado.includes("@")) {
        useremailInput.classList.remove("correct");
        useremailInput.classList.add("error");
        useremailHelper.innerText = "Por favor, insira um e-mail válido";
        useremailHelper.classList.add("visible");
    } else {
        useremailInput.classList.remove("error");
        useremailHelper.classList.remove("visible");
        useremailHelper.innerText = "";
        useremailInput.classList.add("correct");
    }
});

celularInput.addEventListener("input", (event) => {
    let valorDigitado = event.target.value;

    // Remover caracteres que não são números
    valorDigitado = valorDigitado.replace(/\D/g, '');

    if (valorDigitado.length !== 11) {
        celularInput.classList.remove("correct");
        celularInput.classList.add("error");
        celularHelper.innerText = "Insira um número de celular válido (11 dígitos)";
        celularHelper.classList.add("visible");
    } else {
        celularInput.classList.remove("error");
        celularHelper.classList.remove("visible");
        celularHelper.innerText = "";
        celularInput.classList.add("correct");
    }
});

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


//código relacionado ao botão enviar 
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

