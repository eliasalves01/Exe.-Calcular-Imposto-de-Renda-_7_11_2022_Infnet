let salario = Number(prompt("Qual seu Sálario?"));

if (salario > 0 && typeof  42) {

  if (salario >= 0.1 && salario <= 1903.98) {
    alert(`Você é isento do imposto de renda`);
  } else if (salario >= 1903.99 && salario <= 2826.65) {
    let imposto = 0.075 * salario
    alert(`Com base no seu salário R$ ${salario}, o imposto que você devera pagar é R$ ${imposto}`)
  } else if (salario >= 2826.66 && salario <= 3751.05) {
    let imposto = 0.15 * salario
    alert(`Com base no seu salário R$ ${salario}, o imposto que você devera pagar é R$ ${imposto}`)
  } else if (salario >= 3751.05 && salario <= 4664.68) {
    let imposto = 0.225 * salario
    alert(`Com base no seu salário R$ ${salario}, o imposto que você devera pagar é R$ ${imposto}`)
  } else if (salario > 4664.68) {
    let imposto = 0.275 * salario
    alert(`Com base no seu salário R$ ${salario}, o imposto que você devera pagar é R$ ${imposto}`)
  }

} else {
  alert("ERRO: Valor Desconhecido");
}


