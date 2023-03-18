const calcularButton = document.querySelector("#calcular");
const consumoP = document.querySelector("#consumo");

calcularButton.addEventListener("click", () => {
  const quilometragem = parseFloat(document.querySelector("#quilometragem").value);
  const litros = parseFloat(document.querySelector("#litros").value);

  if (isNaN(quilometragem) || isNaN(litros)) {
    alert("Por favor, insira valores numéricos.");
    return;
  }

  const consumo = quilometragem / litros;
  consumoP.textContent = `${consumo.toFixed(2)} km/l`;

  const classificacao = document.querySelectorAll("table td");
  classificacao.forEach((td) => td.classList.remove("destaque"));

  if (consumo > 20) {
    classificacao[0].classList.add("destaque");
  } else if (consumo > 12) {
    classificacao[1].classList.add("destaque");
  } else if (consumo > 8) {
    classificacao[2].classList.add("destaque");
  } else {
    classificacao[3].classList.add("destaque");
  }
});