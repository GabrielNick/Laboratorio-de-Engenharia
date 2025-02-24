const hora = document.getElementById("data");
const dataAtual = new Date();

const diasDaSemana = [
  "Domingo",
  "Segunda-feira",
  "Terça-feira",
  "Quarta-feira",
  "Quinta-feira",
  "Sexta-feira",
  "Sábado",
];

const meses = [
  "Janeiro",
  "Fevereiro",
  "Março",
  "Abril",
  "Maio",
  "Junho",
  "Julho",
  "Agosto",
  "Setembro",
  "Outubro",
  "Novembro",
  "Dezembro",
];

const diaDaSemana = diasDaSemana[dataAtual.getDay()];
const diaDoMes = dataAtual.getDate();
const mes = meses[dataAtual.getMonth()];
const ano = dataAtual.getFullYear();

document.write(`${diaDaSemana}, ${diaDoMes} de ${mes} de ${ano}`);
