var numero = Number(prompt("Digite um número inteiro positivo: "));

if (numero <= 1 || !Number.isInteger(numero)) {
  alert("Insira um número inteiro positivo maior que 1.");
} else if (Array.from({ length: numero - 2 }).some((_, i) => numero % (i + 2) === 0)) {
  alert("O número não é primo.");
} else {
  alert("O número é primo.");
}