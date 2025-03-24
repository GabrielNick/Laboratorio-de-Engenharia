document.addEventListener("DOMContentLoaded", function () {
  const app = document.getElementById("app");

  // Criando o container principal
  const container = document.createElement("div");
  Object.assign(container.style, {
    width: "250px",
    margin: "auto",
    padding: "20px",
    border: "1px solid #ddd",
    borderRadius: "10px",
    textAlign: "center",
    boxShadow: "2px 2px 10px rgba(0,0,0,0.1)"
  });

  // Criando botão de reset
  const resetButton = document.createElement("button");
  resetButton.innerText = "🔄";
  Object.assign(resetButton.style, {
    marginTop: "10px",
    fontSize: "18px",
    cursor: "pointer"
  });
  resetButton.onclick = () => {
    menCounter.count.value = 0;
    womenCounter.count.value = 0;
    updateTotal();
  };

  container.appendChild(resetButton);

  // Criando o título
  const title = document.createElement("h2");
  title.innerText = "Total";
  container.appendChild(title);

  // Criando o display do total
  const totalDisplay = document.createElement("input");
  Object.assign(totalDisplay, {
    type: "text",
    value: 0,
    readOnly: true
  });
  Object.assign(totalDisplay.style, {
    width: "50px",
    padding: "10px",
    textAlign: "center"
  });
  container.appendChild(totalDisplay);

  // Criando função para criar contadores individuais
  function createCounter(label, imgSrc) {
    const counterDiv = document.createElement("div");
    Object.assign(counterDiv.style, {
      marginTop: "20px",
      display: "flex",
      flexDirection: "column",
      alignItems: "center"
    });

    const img = document.createElement("img");
    img.src = imgSrc;
    img.style.width = "50px";
    counterDiv.appendChild(img);

    const buttonsDiv = document.createElement("div");

    const addButton = document.createElement("button");
    addButton.innerText = "+";
    Object.assign(addButton.style, {
      margin: "5px",
      border: "none",
      backgroundColor: "green",
      color: "white",
      borderRadius: "50%",
      fontSize: "25px",
      width: "40px",
      height: "40px",
      cursor: "pointer"
    });
    addButton.onclick = () => {
      count.value = parseInt(count.value) + 1;
      updateTotal();
    };

    const subtractButton = document.createElement("button");
    subtractButton.innerText = "-";
    Object.assign(subtractButton.style, {
      margin: "5px",
      fontSize: "20px",
      backgroundColor: "red",
      borderRadius: "50%",
      color: "white",
      border: "none",
      width: "40px",
      height: "40px",
      cursor: "pointer"
    });
    subtractButton.onclick = () => {
      if (parseInt(count.value) > 0) {
        count.value = parseInt(count.value) - 1;
        updateTotal();
      }
    };

    buttonsDiv.appendChild(addButton);
    buttonsDiv.appendChild(subtractButton);
    counterDiv.appendChild(buttonsDiv);

    const labelText = document.createElement("p");
    labelText.innerText = label;
    counterDiv.appendChild(labelText);

    const count = document.createElement("input");
    Object.assign(count, {
      type: "text",
      value: 0,
      readOnly: true
    });
    Object.assign(count.style, {
      width: "50px",
      textAlign: "center"
    });
    counterDiv.appendChild(count);

    return { counterDiv, count };
  }

  // Criando os contadores individuais
  const menCounter = createCounter("Homens", "./img/homem.jpg");
  const womenCounter = createCounter("Mulheres", "./img/mulher.jpg");

  function updateTotal() {
    totalDisplay.value =
      parseInt(menCounter.count.value) + parseInt(womenCounter.count.value);
  }

  // Adicionando tudo ao container
  const containerHomemEMulher = document.createElement("div");
  Object.assign(containerHomemEMulher.style, {
    display: "flex",
    justifyContent: "space-around"
  });
  containerHomemEMulher.appendChild(menCounter.counterDiv);
  containerHomemEMulher.appendChild(womenCounter.counterDiv);
  container.appendChild(containerHomemEMulher);

  // Adicionando o container ao app
  app.appendChild(container);
});
