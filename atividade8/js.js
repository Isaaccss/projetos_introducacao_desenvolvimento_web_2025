document.getElementById("formulario").addEventListener("submit", function(event) {
    event.preventDefault();
  
    const nome = document.getElementById("nome").value;
    const idade = parseInt(document.getElementById("idade").value);
    const sexo = document.getElementById("sexo").value;
    const peso = parseFloat(document.getElementById("peso").value);
    const altura = parseFloat(document.getElementById("altura").value);
    const atividade = parseFloat(document.getElementById("atividade").value);
    const kgPerder = parseFloat(document.getElementById("kgPerder").value);
    const diasPerder = parseInt(document.getElementById("diasPerder").value);
    const distancia = parseFloat(document.getElementById("distancia").value);
  
    let tmb;
    if (sexo === "masculino") {
      tmb = 66 + (13.7 * peso) + (5 * altura) - (6.8 * idade);
    } else {
      tmb = 655 + (9.6 * peso) + (1.8 * altura) - (4.7 * idade);
    }
  
    const gastoTotal = tmb * atividade;
    const aguaLitros = peso * 0.035;
    const deficitTotal = kgPerder * 7700;
    const deficitDiario = deficitTotal / diasPerder;
    const gastoCaminhada = peso * distancia * 0.9;
  
    document.getElementById("resultado").innerHTML = `
      <h2>Resultados para ${nome}:</h2>
      <p><strong>TMB:</strong> ${tmb.toFixed(2)} kcal/dia</p>
      <p><strong>Gasto Calórico Diário Total:</strong> ${gastoTotal.toFixed(2)} kcal/dia</p>
      <p><strong>Água Diária Ideal:</strong> ${aguaLitros.toFixed(2)} litros</p>
      <p><strong>Déficit Diário para perder ${kgPerder}kg em ${diasPerder} dias:</strong> ${deficitDiario.toFixed(2)} kcal/dia</p>
      <p><strong>Gasto Calórico em Caminhada de ${distancia} km:</strong> ${gastoCaminhada.toFixed(2)} kcal</p>
    `;
  });
  