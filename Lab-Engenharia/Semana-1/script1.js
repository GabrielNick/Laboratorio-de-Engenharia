var numero = Number(prompt("Digite um número: "));

if (numero <= 0) {
  alert("O número é negativo.");
} else {
  alert(numero % 2 == 0 ? "O número é par." : "O número é ímpar.");
}