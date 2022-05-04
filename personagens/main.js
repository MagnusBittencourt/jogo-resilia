
function verificar(escolha1, escolha2) {
  let escolha;

  while (escolha !== 1 && escolha !== 2) {
    escolha = Number( prompt("Digite 1 Para SIM\nDigite 2 para NÃO"));
    if (escolha === 1) {
      location.href =escolha1
    } else if (escolha === 2) {
      location.href =escolha2
    } else alert("coloque\n1 para sim\n2 para não");
  }
}
