/*Atividade 1*/
function ola() {
    document.getElementById("R1").innerText = "Olá, mundo!";
}

/*Atividade 2*/
function Numero() {
    const numero = document.getElementById("nx").value;
    const mensagem = `O número informado foi: ${numero}`;
    document.getElementById("R2").innerText = mensagem;
}

/*Atividade 3*/
function Soma() {
    let n1 = parseInt(document.getElementById("n1").value);
    let n2 = parseInt(document.getElementById("n2").value);
    let R3 = n1 + n2
    const soma = `A soma é: ${R3}`;
    document.getElementById("R3").innerText = soma;

}

/*Atividade 4*/

function bimest() {
    const bn1 = parseFloat(document.getElementById("bn1").value);
    const bn2 = parseFloat(document.getElementById("bn2").value);
    const bn3 = parseFloat(document.getElementById("bn3").value);
    const bn4 = parseFloat(document.getElementById("bn4").value);
    const media = (bn1 + bn2 + bn3 + bn4) / 4;
    document.getElementById("R4").innerText = `A média final é ${media.toFixed(2)}`;
}

/*Atividade 5*/
function centimetros() {
    const mm = parseFloat(document.getElementById("mm").value);
    const centímetros = mm * 100
    document.getElementById("R5").innerText = `para centímetros é: ${centímetros.toFixed(5)}cm`;
}

/*Atividade 6*/
function Raiodocirco() {
    const r = parseFloat(document.getElementById("r").value);
    const A = 3.14*(r * r)
    document.getElementById("R6").innerText = `A área é: ${A.toFixed(5)}`;

}

/*Atividade 7*/
function areadoquadrado(){
    const l = parseFloat(document.getElementById("l").value)
    const a = l*l
    const a1 = a*2
    document.getElementById("R7").innerText = `A área do quadrado é: ${a.toFixed(3)}`;
    document.getElementById("R7.1").innerText = `O dobro da área do quadrado é: ${a1.toFixed(3)}`;
}

/*Atividade 8*/
function calcularSalario() {
    const valorHora = parseFloat(document.getElementById("valorHora").value);
    const horasMes = parseFloat(document.getElementById("horasMes").value);
  
    if (isNaN(valorHora) || isNaN(horasMes)) {
      document.getElementById("salarioFinal").innerText = "Preencha todos os campos corretamente.";
      return;
    }
  
    const salario = valorHora * horasMes;
    document.getElementById("salarioFinal").innerText = `Seu salário mensal é R$ ${salario.toFixed(2)}`;
  }

  /*Atividade 9*/
  function converterParaCelsius() {
    const f = parseFloat(document.getElementById("fahrenheit").value);
  
    if (isNaN(f)) {
      document.getElementById("resultadoTemp").innerText = "Digite uma temperatura válida em Fahrenheit.";
      return;
    }
  
    const c = 5 * ((f - 32) / 9);
    document.getElementById("resultadoTemp").innerText = `A temperatura em Celsius é ${c.toFixed(2)}°C`;
  }

  /*Atividade 10*/
  function converterParaFahrenheit() {
    const c = parseFloat(document.getElementById("celsius").value);
  
    if (isNaN(c)) {
      document.getElementById("resultadoF").innerText = "Digite uma temperatura válida em Celsius.";
      return;
    }
  
    const f = (c * 9/5) + 32;
    document.getElementById("resultadoF").innerText = `A temperatura em Fahrenheit é ${f.toFixed(2)}°F`;
  }