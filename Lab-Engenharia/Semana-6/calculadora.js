// Cria a calculadora
const app = document.getElementById('app');
app.style.display = 'flex';
app.style.flexDirection = 'column';
app.style.alignItems = 'center';
app.style.justifyContent = 'center';
app.style.height = '100vh';

// Container da calculadora
const calculator = document.createElement('div');
calculator.style.background = 'black';
calculator.style.borderRadius = '20px';
calculator.style.padding = '20px';
calculator.style.position = 'relative'; // Permite posicionar o risco branco na parte inferior
app.appendChild(calculator);

// Display superior para mostrar o histórico da operação
const historyDisplay = document.createElement('div');
historyDisplay.style.color = 'gray';
historyDisplay.style.fontSize = '1.5rem';
historyDisplay.style.textAlign = 'right';
historyDisplay.style.width = '320px';
historyDisplay.style.padding = '10px';
historyDisplay.innerText = '';
calculator.appendChild(historyDisplay);

// Display para mostrar o resultado
const display = document.createElement('div');
display.style.color = 'white';
display.style.fontSize = '3rem';
display.style.textAlign = 'right';
display.style.width = '320px';
display.style.padding = '10px';
display.innerText = '0';
calculator.appendChild(display);

// Container para os botões
const buttonsContainer = document.createElement('div');
buttonsContainer.style.marginTop = '10px';
calculator.appendChild(buttonsContainer);

// Linha do risco branco (estético) na parte inferior
const divider = document.createElement('div');
divider.style.height = '2px';
divider.style.backgroundColor = 'white';
divider.style.marginTop = '10px';
divider.style.position = 'absolute';
divider.style.bottom = '10px';
divider.style.left = '50%';
divider.style.transform = 'translateX(-50%)';
divider.style.width = '50%'; // Ajusta o tamanho para menor
calculator.appendChild(divider);

// Variável para armazenar a expressão e o histórico
let expression = '';
let history = '';

// Função para formatar números grandes
const formatLargeNumbers = (num) => {
    if (num.length > 12) {
        return parseFloat(num).toExponential(6);
    }
    return num;
}

// Botões
const buttons = [
    ['AC', '+/-', '%', '÷'],
    ['7', '8', '9', '×'],
    ['4', '5', '6', '−'],
    ['1', '2', '3', '+'],
    ['0', '.', '=']
];

buttons.forEach((row) => {
    const rowDiv = document.createElement('div');
    rowDiv.style.display = 'flex';
    buttonsContainer.appendChild(rowDiv);

    row.forEach((btn) => {
        const button = document.createElement('button');
        button.innerText = btn;
        button.style.flex = btn === '0' ? '2' : '1';
        button.style.fontSize = '2rem';
        button.style.padding = '20px';
        button.style.margin = '5px';
        button.style.borderRadius = '50%';
        button.style.border = 'none';
        button.style.width = '70px';
        button.style.height = '70px';
        button.style.cursor = 'pointer';

        if (btn === '0') {
            button.style.borderRadius = '35px';
            button.style.width = '150px';
        }

        if (['÷', '×', '−', '+', '='].includes(btn)) {
            button.style.background = 'orange';
            button.style.color = 'white';
        } else if (['AC', '+/-', '%'].includes(btn)) {
            button.style.background = 'gray';
            button.style.color = 'black';
        } else {
            button.style.background = '#333';
            button.style.color = 'white';
        }

        rowDiv.appendChild(button);

        button.addEventListener('click', () => {
            if (btn === 'AC') {
                expression = '';
                history = '';
                display.innerText = '0';
                historyDisplay.innerText = '';
            } else if (btn === '=') {
                try {
                    const result = eval(expression.replace('×', '*').replace('÷', '/').replace('−', '-'));
                    history = expression;
                    expression = formatLargeNumbers(result.toString());
                    historyDisplay.innerText = history + ' =';
                } catch (e) {
                    expression = 'Error';
                    history = '';
                    historyDisplay.innerText = '';
                }
                display.innerText = expression;
            } else if (btn === '%') {
                expression = (parseFloat(expression) / 100).toString();
                display.innerText = expression;
            } else if (btn === '+/-') {
                expression = (parseFloat(expression) * -1).toString();
                display.innerText = expression;
            } else if (['+', '-', '×', '÷'].includes(btn)) {
                if (['+', '-', '×', '÷'].includes(expression.slice(-1))) {
                    expression = expression.slice(0, -1);
                }
                expression += btn;
                display.innerText = expression;
                historyDisplay.innerText = expression;
            } else {
                if (expression === '0' && btn !== '.') {
                    expression = btn;
                } else {
                    expression += btn;
                }
                display.innerText = expression;
            }
        });
    });
});
