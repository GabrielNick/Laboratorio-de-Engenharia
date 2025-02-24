var numero = Number(prompt("Digite um número inteiro positivo: "));

if (numero > 1 && Number.isInteger(numero)) {
  let fatorial = Array.from({ length: numero }, (_, i) => i + 1).reduce((acc, curr) => acc * curr, 1);
  alert(`O fatorial de ${numero} é: ${fatorial}`);
}