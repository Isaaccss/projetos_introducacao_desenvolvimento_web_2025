let usuarios = [];
let indiceAtual = -1;

// Função para incluir novo contato
function incluir() {
    let nome = document.querySelector('input[placeholder="Nome"]').value;
    let sobrenome = document.querySelector('input[placeholder="Sobrenome"]').value;
    let endereco = document.querySelector('input[placeholder="Endereço"]').value;
    let telefone = document.querySelector('input[placeholder="Telefone"]').value;

    if (nome && sobrenome && endereco && telefone) {
        usuarios.push({ nome, sobrenome, endereco, telefone });
        indiceAtual = usuarios.length - 1;
        alert("Contato incluído com sucesso!");
    } else {
        alert("Preencha todos os campos.");
    }
}

// Função para exibir o cadastro atual
function mostrarCadastro() {
    if (usuarios.length > 0 && indiceAtual >= 0) {
        let contato = usuarios[indiceAtual];
        document.querySelector('input[placeholder="Nome"]').value = contato.nome;
        document.querySelector('input[placeholder="Sobrenome"]').value = contato.sobrenome;
        document.querySelector('input[placeholder="Endereço"]').value = contato.endereco;
        document.querySelector('input[placeholder="Telefone"]').value = contato.telefone;
    }
}

// Função para editar
function editar() {
    if (indiceAtual >= 0 && usuarios.length > 0) {
        usuarios[indiceAtual].nome = document.querySelector('input[placeholder="Nome"]').value;
        usuarios[indiceAtual].sobrenome = document.querySelector('input[placeholder="Sobrenome"]').value;
        usuarios[indiceAtual].endereco = document.querySelector('input[placeholder="Endereço"]').value;
        usuarios[indiceAtual].telefone = document.querySelector('input[placeholder="Telefone"]').value;
        alert("Contato editado com sucesso!");
    }
}

// Função para excluir
function excluir() {
    if (indiceAtual >= 0 && usuarios.length > 0) {
        usuarios.splice(indiceAtual, 1);
        if (usuarios.length === 0) {
            indiceAtual = -1;
            limparCampos();
        } else {
            indiceAtual = Math.max(0, indiceAtual - 1);
            mostrarCadastro();
        }
        alert("Contato excluído!");
    }
}

// Cancelar/limpar
function limparCampos() {
    document.querySelectorAll('input[type="text"]').forEach(input => input.value = "");
}

// Navegação
function irParaPrimeiro() {
    if (usuarios.length > 0) {
        indiceAtual = 0;
        mostrarCadastro();
    }
}
function irParaAnterior() {
    if (indiceAtual > 0) {
        indiceAtual--;
        mostrarCadastro();
    }
}
function irParaProximo() {
    if (indiceAtual < usuarios.length - 1) {
        indiceAtual++;
        mostrarCadastro();
    }
}
function irParaUltimo() {
    if (usuarios.length > 0) {
        indiceAtual = usuarios.length - 1;
        mostrarCadastro();
    }
}

// Login simples
function validarLogin() {
    const usuario = document.querySelector('input[placeholder="USUÁRIO"]').value;
    const senha = document.querySelector('input[placeholder="SENHA"]').value;

    if (usuario.trim() !== "" && senha.trim() !== "") {
        window.location.href = "cadastro.html";
    } else {
        alert("Preencha todos os campos!");
    }
}

// Eventos de botões
window.onload = function () {
    const caminho = window.location.pathname;
    if (caminho.includes("cadastro.html")) {
        document.querySelector(".incluir").onclick = incluir;
        document.querySelector(".editar").onclick = editar;
        document.querySelector(".excluir").onclick = excluir;
        document.querySelector(".cancelar").onclick = limparCampos;

        const botoesNav = document.querySelectorAll(".navegacao button");
        botoesNav[0].onclick = irParaPrimeiro;
        botoesNav[1].onclick = irParaAnterior;
        botoesNav[2].onclick = irParaProximo;
        botoesNav[3].onclick = irParaUltimo;
    } else if (caminho.includes("index.html")) {
        const btnEntrar = document.querySelector('a button');
        btnEntrar.onclick = function (event) {
            event.preventDefault();
            validarLogin();
        };
    }
}