document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault();

    let valid = true;

    // Nome
    const nome = document.getElementById("nome");
    const nomeError = document.getElementById("nomeError");
    if (nome.value.trim() === "") {
        valid = false;
        nome.classList.add("error");
        nomeError.style.display = "block";
    } else {
        nome.classList.remove("error");
        nomeError.style.display = "none";
    }

    // Email
    const email = document.getElementById("email");
    const emailError = document.getElementById("emailError");
    if (email.value.trim() === "") {
        valid = false;
        email.classList.add("error");
        emailError.style.display = "block";
    } else {
        email.classList.remove("error");
        emailError.style.display = "none";
    }

    // Mensagem
    const mensagem = document.getElementById("mensagem");
    const mensagemError = document.getElementById("mensagemError");
    if (mensagem.value.trim() === "") {
        valid = false;
        mensagem.classList.add("error");
        mensagemError.style.display = "block";
    } else {
        mensagem.classList.remove("error");
        mensagemError.style.display = "none";
    }

    // Se todos os campos estiverem válidos
    if (valid) {
        alert("Mensagem enviada com sucesso!");
    }
});
