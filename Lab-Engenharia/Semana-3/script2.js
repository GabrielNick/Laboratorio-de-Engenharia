function Carro(marca, modelo, ano, cor, kmRodados, valorFipe) {
    this.marca = marca;
    this.modelo = modelo;
    this.ano = ano;
    this.cor = cor;
    this.kmRodados = kmRodados;
    this.valorFipe = valorFipe;

    this.anosUtilizacao = function() {
        const anoAtual = new Date().getFullYear();
        return anoAtual - this.ano;
    };

    this.valorMercado = function() {
        let anosUso = Math.max(this.anosUtilizacao(), 1); // Evita divisão por 0
        let kmAno = this.kmRodados / anosUso;
    
        if (kmAno <= 30000) {
            return this.valorFipe * 1.1;  // 110% do valor FIPE
        } else if (kmAno > 30000 && kmAno <= 50000) {
            return this.valorFipe * 1.0;  // 100% do valor FIPE
        } else {
            return this.valorFipe * 0.9;  // 90% do valor FIPE
        }
    };
}
function calcularCarro() {
    let marca = document.getElementById("marca").value;
    let modelo = document.getElementById("modelo").value;
    let ano = parseInt(document.getElementById("ano").value);
    let cor = document.getElementById("cor").value;
    let kmRodados = parseFloat(document.getElementById("kmRodados").value);
    let valorFipe = parseFloat(document.getElementById("valorFipe").value);

    if (!marca || !modelo || isNaN(ano) || !cor || isNaN(kmRodados) || isNaN(valorFipe)) {
        alert("Por favor, preencha todos os campos corretamente!");
        return;
    }

    let carro = new Carro(marca, modelo, ano, cor, kmRodados, valorFipe);
    let anosUso = carro.anosUtilizacao();
    let valorMercado = carro.valorMercado().toFixed(2);

    document.getElementById("resultado").innerHTML = 
        `O veículo ${carro.marca} ${carro.modelo} tem ${anosUso} anos de uso. <br>
         O valor de mercado estimado é R$ ${valorMercado}`;
}
