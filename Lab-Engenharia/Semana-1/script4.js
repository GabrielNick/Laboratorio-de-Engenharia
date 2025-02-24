var dado = prompt("Digite um valor:");

var dadoConvertido = Number(dado);
var tipoDado = (isNaN(dadoConvertido) || dado.trim() === "") ? "string" : "number";

if (confirm("Deseja verificar o tipo do dado informado?")) {
  document.body.innerHTML = `<h2>O tipo do dado informado é: ${tipoDado}</h2>`;
} else {
  document.body.innerHTML = "<h2>Obrigado por visitar esta página.</h2>";
}