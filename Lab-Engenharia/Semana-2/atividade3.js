function verificarPalindromo() {
    let entrada = prompt("Digite o texto para verificar se é um palíndromo:");
    let textoFormatado = entrada.replace(/[^A-Za-z0-9]/g, "").toLowerCase();
    let textoInvertido = textoFormatado.split("").reverse().join("");
    if (textoFormatado === textoInvertido) {
      alert("O texto é um palíndromo!");
    } else {
      alert("O texto não é um palíndromo.");
    }
}

verificarPalindromo();